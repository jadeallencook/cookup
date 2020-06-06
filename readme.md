# Cookup
 
Cookup stores your boilerplate code and dynamically generates new files.
 
## Overview
 
Let's create a boilerplate for generating new React components.
 
First we need to create the template **(react-template.js)**:
 
```js
import React from 'react';
 
function __1__() {
   return (<div className="__1__"></div>)
}
 
export default __1__;
```
 
The **__1__** will be replaced with the first parameter.

Now we can use cookup to store the boilerplate:
 
```
cookup react-template.js react-component
```
 
1. *The first parameter is the boilerplate's filename.*
1. *The second parameter is the command used to generate a new file with cookup.*
 
This is how we can then dynamically generate a new component:
 
```
cookup react-component video-player VideoPlayer
```
 
The command above will output this **(video-player.js)**:
 
```js
import React from 'react';
 
function VideoPlayer() {
   return (<div className="VideoPlayer"></div>)
}
 
export default VideoPlayer;
```