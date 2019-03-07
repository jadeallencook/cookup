# cookup

CLI tool for web developers

To get started with **cookup** run:

```npm install cookup -g```

If you get an auth error, try running:

```sudo npm install cookup -g```

Once it's installed, try:

```cookup```

And you should get a welcome message!

## React Framework

By using **cookup**, you can easily create new React projects and components.

### Project
To create a new React project use: 

``` cookup react project-name```

OR (short hand):

``` cookup r project-name```

Add a path:

``` cookup r project-name path-name/```

What it cooks up:
- project-name/
    - public/
        - index.html
        - manifest.json
    - src/
        - App.js
        - App.scss
        - App.test.js
        - index.js
        - index.scss
        - serviceWorker.js
        - style.global.scss
    - package.json
    - yarn.lock
    - .gitignore

This is the same as **create-react-app** *v2.0.2*, using SCSS, without most of the boilerplate UI. You still need to run **npm install** before running **npm start**. When the project deploys, it will start be accessible at **http://localhost:3000/** via your browser.

### Components

To create a new React component use: 

``` cookup react component ComponentName```

OR (short hand):

``` cookup r c ComponentName```

Make it stateless:

``` cookup r c ComponentName -state```

Add a path:

``` cook r c ComponentName path-name/ -state```