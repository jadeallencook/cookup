# Cookup
 
Cookup stores your boilerplate code and dynamically generates new files.
 
## Overview
 
Let's create a boilerplate for generating new React components.
 
First we need to create the template **(react-template.js)**:
 
```js
import React from 'react';
 
function __0__() {
   return (<div className="__0__"></div>)
}
 
export default __0__;
```
 
The ``__0__`` will be replaced with the first parameter.

Now we can use cookup to store the boilerplate:
 
```
cookup react-template.js
```

We can then dynamically generate a new component:
 
```
cookup react-component/video-player js VideoPlayer
```
 
The command above will output this **(video-player.js)**:
 
```js
import React from 'react';
 
function VideoPlayer() {
   return (<div className="VideoPlayer"></div>)
}
 
export default VideoPlayer;
```
## Basic Uses

You can import a boilerplate like this:

```
cookup boilerplate.ext
```

This will store a copy of it in your ```/tmp/``` directory.

You can then export a new copy of your boilerplate like this:

```
cookup boilerplate ext
```

If you want to rename it, you do it like such:

```
cookup boilerplate/new-name ext
```