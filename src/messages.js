const PACKAGE = require(`../package.json`);

module.exports = {
    welcome: `
        \rYou're using \x1b[33m${PACKAGE.name.toUpperCase()}\x1b[0m ${PACKAGE.version}
        \rDeveloped by \x1b[32m${PACKAGE.author}\x1b[0m (2019)

        \r\x1b[36mReact Projects\x1b[0m
        \r• new react project-name (n r p-n)
        \r• new react component component-name (n r c c-n)
    `,
    new: {
        react: {
            project: `\x1b[32mSuccessful:\x1b[0m New React project created!\n`,
            component: `\x1b[32mSuccessful:\x1b[0m New React component created!\n`
        }
    },
    working: [
        `\n\x1b[33mSpinning that up for your right now...\x1b[0m`,
        `\n\x1b[33mLet's get this started...\x1b[0m`,
        `\n\x1b[33mGetting it done...\x1b[0m`,
        `\n\x1b[33mGood idea, let me get do that for you...\x1b[0m`,
    ]
}