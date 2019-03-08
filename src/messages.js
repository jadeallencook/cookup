const PACKAGE = require(`../package.json`);

module.exports = {
    welcome: `
        \rYou're using \x1b[33m${PACKAGE.name.toUpperCase()}\x1b[0m v${PACKAGE.version}
        \r${PACKAGE.description}
        \rDeveloped by \x1b[32m@jadeallencook\x1b[0m

        \r\x1b[36mReact Framework\x1b[0m

        \r\x1b[33m// Project\x1b[0m
        \r- \x1b[32mcookup\x1b[0m react project-name path 
        \r- \x1b[32mcookup\x1b[0m r project-name path

        \r\x1b[33m// Component\x1b[0m
        \r- \x1b[32mcookup\x1b[0m react component ComponentName path
        \r- \x1b[32mcookup\x1b[0m r c ComponentName path
        \r- \x1b[32mcookup\x1b[0m r c ComponentName path -state

        \r\x1b[36mSCSS Style Sheets\x1b[0m

        \r\x1b[33m// Style Sheet\x1b[0m
        \r- \x1b[32mcookup\x1b[0m scss style-name 

        \r\x1b[33m// Templates\x1b[0m
        \r- \x1b[32mcookup\x1b[0m scss normalize
        \r- \x1b[32mcookup\x1b[0m scss colors 
        \r- \x1b[32mcookup\x1b[0m scss sizes 
    `,
    new: {
        react: {
            project: `\x1b[32mSuccessful:\x1b[0m New React project created!\n`,
            component: `\x1b[32mSuccessful:\x1b[0m New React component created!\n`
        },
        scss: {
            sheet: `\x1b[32mSuccessful:\x1b[0m New SCSS style sheet created!\n`,
            normalize: `\x1b[32mSuccessful:\x1b[0m Your normalize SCSS has been created!\n`,
            colors: `\x1b[32mSuccessful:\x1b[0m Your colors SCSS has been created!\n`,
            sizes: `\x1b[32mSuccessful:\x1b[0m Your sizes SCSS has been created!\n`,
        }
    },
    working: [
        `\n\x1b[33mSpinning that up for your right now...\x1b[0m`,
        `\n\x1b[33mLet's get this started...\x1b[0m`,
        `\n\x1b[33mGetting it done...\x1b[0m`,
        `\n\x1b[33mGood idea, let me get do that for you...\x1b[0m`,
    ]
}