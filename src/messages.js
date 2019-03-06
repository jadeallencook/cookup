const PACKAGE = require(`../package.json`);

module.exports = {
    welcome: `
        \rYou're using \x1b[33m${PACKAGE.name.toUpperCase()}\x1b[0m v${PACKAGE.version}
        \r${PACKAGE.description}
        \rDeveloped by \x1b[32m@jadeallencook\x1b[0m

        \r\x1b[36mReact Framework\x1b[0m

        \r\x1b[33m// Project\x1b[0m
        \r- \x1b[32mcookup\x1b[0m react name path 
        \r- \x1b[32mcookup\x1b[0m r name path

        \r\x1b[33m// Component\x1b[0m
        \r- \x1b[32mcookup\x1b[0m react component name path
        \r- \x1b[32mcookup\x1b[0m r c name path
        \r- \x1b[32mcookup\x1b[0m r c name path -state
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