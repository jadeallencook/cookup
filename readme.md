# Cookup
 
Cookup stores your boilerplate code and dynamically generates new files.
 
## Overview
 
Let's create a boilerplate for generating new React components.
 
First we need to create the template **(react-template.js)**:
 
```js
import React from 'react';
 
function Component() {
   return (<div className="Component"></div>)
}
 
export default Component;
```
 
Now we can use cookup to store the boilerplate:
 
```
cookup react-template.js react-component Component
```
 
1. *The first parameter is the boilerplate's filename.*
1. *The second parameter is the command used to generate a new file with cookup.*
1. *The remaining parameters are strings of text that will be replaced with parameters.*
 
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