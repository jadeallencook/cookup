# cookup

To get started with **cookup** run:

```npm install cookup -g```

If you get an auth error, try running:

```sudo npm install cookup -g```

Once it's installed, try:

```cookup```

And you should get a welcome message!

## React Framework

By using **cookup**, you can easily create new React projects and components.

### Projects

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

This is the same as **create-react-app** *v2.0.2* with SCSS installed and most of the boilerplate UI removed. You still need to run **npm install** before running **npm start**. When the project deploys, it will start be accessible at **http://localhost:3000/** via your browser.

### Components

To create a new React component use: 

``` cookup react component ComponentName```

OR (short hand):

``` cookup r c ComponentName```

Make it stateless:

``` cookup r c ComponentName -state```

Add a path:

``` cook r c ComponentName path-name/ -state```

## SCSS

### Style Sheets

To create a new SCSS stylesheet use:

``` cookup scss stylesheet-name```

This will spinup a new stylesheet:

```scss
div.stylesheet-name { }

@media only screen and (max-device-width: 480px) {
    div.stylesheet-name { }
}
```

### Normalize

``` cookup scss normalize```

```scss
html,
body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
}

a:link,
a:hover,
a:visited,
a:active {
    text-decoration: none;
}
```

### Sizes

``` cookup scss sizes```

```scss
$margin: 15px;
$padding: 15px;

$fontSize1: .75em;
$fontSize2: 1em;
$fontSize3: 1.5em;
$fontSize4: 2em;
```

### Colors

``` cookup scss colors```

```scss
$darkgrey: #111111;
$medgrey: #222222;
$grey: #333333;
$lightgrey: #444444;

$white: #FFFFFF;
$black: #000000;

$color1: #1982be;
$color2: #34a747;
$color3: #c8d41d;
$color4: #d4231d;
```