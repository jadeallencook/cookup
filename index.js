#!/usr/bin/env node

const args = process.argv;
const ReactProject = require('./src/new-react-project.js');
const ReactComponent = require('./src/new-react-component.js');
const WelcomeMessage = require('./src/welcome-message.js');

const App = {
    react: {
        component: {
            default: () => ReactComponent(args[4], args[5], args[6])
        },
        default: () => ReactProject(args[3])
    },
    default: () => WelcomeMessage()
};

function ProKeys(obj, value) {
    if (!obj) return false;
    const keys = Object.keys(obj);
    let string = false;
    keys.map(key => {
        if (key[0] === value) string = key;
    });
    return string;
}

let command = App;
args.forEach((key, x) => {
    if (x > 1 && typeof command === 'object') {
        const ProKey = ProKeys(command, key);
        key = (key.length === 1 && ProKey) ? ProKey : key;
        command = (key in command) ? command[key] : command['default'];
    }
});
if (typeof command === 'object') command = command['default'];
command();