const fileRewrite = require('./file-rewrite.js');
const fs = require('fs-extra');
const working = require('./random-working-message.js');
const messages = require('./messages.js');

module.exports = function(type) {

    console.log(working());

    const types = ['colors', 'normalize', 'sizes'];
    const output = `${process.cwd()}/${type}.scss`;

    if (types.indexOf(type) === -1) {

        fs.copy(`${__dirname}/../temps/styles/style.scss`, output).then((err) => {
            if (err) {
                console.log(err);
            } else {
                fileRewrite(output, {
                    name: type
                }).then((err) => {
                    if (err) console.log(err);
                    else console.log(messages.new.scss.sheet);
                });
            }
        });

    } else {

        fs.copy(`${__dirname}/../temps/styles/${type}.scss`, output).then((err) => {
            if (err) console.log(err);
            else console.log(messages.new.scss[type]);
        });

    }
}