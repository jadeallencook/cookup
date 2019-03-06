#!/usr/bin/env node

const args = process.argv;
const ReactProject = require('./src/new-react-project.js');
const ReactComponent = require('./src/new-react-component.js');
const WelcomeMessage = require('./src/welcome-message.js');

const App = {
    new: {
        react: {
            component: {
                default: () => ReactComponent(args[5], args[6], args[7])
            },
            default: () => ReactProject(args[4])
        },
        default: () => WelcomeMessage()
    },
    default: () => WelcomeMessage()
};

function ProKeys(obj, value) {
    const keys = Object.keys(obj);
    const length = keys.length;
    return keys.map((key, i) => {
        if (key[0] === value) return key;
        else if (i + 1 === length) return false;
    });
}

let command = App;
args.forEach((key, x) => {
    if (x > 1) {
        const ProKey = ProKeys(command, key)[0];
        key = (key.length === 1 && ProKey) ? ProKey : key;
        command = (command[key]) ? command[key] : command = command['default'];
    }
});
if (typeof command === 'object') command = command['default'];
command();