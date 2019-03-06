const messages = require('./messages.js');
const working = require('./random-working-message.js');
const fileRewrite = require('./file-rewrite.js');
const fs = require('fs-extra');

module.exports = function (name, username) {

    console.log(working());

    if (!username) username = 'your-username';
    if (!name) name = 'new-react-project';
    const path = `${process.cwd()}/${name}`;

    fs.copy(`${__dirname}/../temps/react/project/`, path).then((error) => {
        if (error) {
            console.log(error);
            return;
        }
        const rewrites = ['/package.json', '/public/index.html'];
        Promise.all(rewrites.map(file => {
            return fileRewrite(`${path}${file}`, {
                username: username,
                name: name
            });
        })).then(() => console.log(messages.new.react.project));
    });
}