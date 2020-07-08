#!/usr/bin/env node

const messages = require('./messages');
const fs = require('fs');
const { argv } = process;

if (!fs.existsSync('/tmp/cookup')) {
  console.log(messages.setup);
  fs.mkdir('/tmp/cookup', { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
  });
}

console.log(
  argv.length <= 2
    ? messages.default
    : (() => {
        if (argv[2].indexOf('.') !== -1) {
          // import
          fs.readFile(argv[2], 'utf8', (err1, data) => {
            if (err1) {
              console.log(messages.error(err1));
            } else {
              fs.writeFile(
                `/tmp/cookup/${
                  argv[2].indexOf('/') !== -1
                    ? argv[2].split('/')[argv[2].split('/').length - 1]
                    : argv[2]
                }`,
                data,
                (err2) => {
                  if (err2) {
                    console.log(messages.error(err2));
                  } else {
                    console.log(messages.success('imported'));
                  }
                }
              );
            }
          });
          return messages.importing;
        } else if (argv[2].indexOf('.') === -1 && argv.length >= 4) {
          // export
          const [name, rename] = argv[2].split('/');
          const ext = argv[3];
          const file = `${name}.${ext}`;
          fs.readFile(`/tmp/cookup/${file}`, 'utf8', (err1, data) => {
            if (argv.length > 4) {
              const params = [...argv].splice(4, argv.length);
              params.forEach((param, index) => {
                const string = `__${index}__`;
                while (data.indexOf(string) !== -1) {
                  data = data.replace(string, param);
                }
              });
            }
            if (err1) {
              console.log(messages.error(err1));
            } else {
              fs.writeFile(
                `./${rename ? `${rename}.${ext}` : file}`,
                data,
                (err2) => {
                  if (err2) {
                    console.log(messages.error(err2));
                  } else {
                    console.log(messages.success('exported'));
                  }
                }
              );
            }
          });
          return messages.exporting;
        } else {
          // error
          return messages.error();
        }
      })()
);
