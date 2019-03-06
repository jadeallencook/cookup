const messages = require('./messages.js');
const working = require('./random-working-message.js');
const fileRewrite = require('./file-rewrite.js');
const fs = require('fs-extra');

module.exports = function (name, path, stateless) {

    console.log(working());

    if (!name || name === '-state') name = 'new-component';
    stateless = (
        stateless === '-state' ||
        path === '-state' ||
        name === '-state'
    ) ? true : false;
    if (!path || path === '-state') path = process.cwd();
    path += `/${name}`;

    let file = `${__dirname}/../temps/react/components/`;
    file += (stateless) ? `stateless.temp` : `component.temp`;
    const style = `${__dirname}/../temps/react/components/style.temp`;

    Promise.all([
        fs.copy(file, `${path}.js`),
        fs.copy(style, `${path}.scss`)
    ]).then(() => {
        const obj = {
            name: name
        };
        Promise.all([
            fileRewrite(`${path}.js`, obj),
            fileRewrite(`${path}.scss`, obj)
        ]).then(() => {
            console.log(messages.new.react.component);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}