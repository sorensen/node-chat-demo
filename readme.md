# Node Chat Demo

This project is a simple 'hello world' introduction to using node.js and socket.io
for making real-time applications, it is meant to be a stepping stone for understanding 
various concepts of node.js as well as a few common workflow patterns.

The server is leveraged on top of express.js, for simple server creation and setup.  
The jade template engine is used to create dynamic HTML on the fly, and finally, 
socket.io is used as an abstraction layer on top of websockets to provide the real-time communications.

## Installation

Brief aside on how to install the project, this will soon be put into a full 
installation guide, but until then, you know the drill.

* [Install node.js](http://github.com/joyent/node)
* [Install NPM](http://github.com/joyent/npm)
* Install all project dependancies below with NPM

The project can be installed by cloning this repo into your project.

    git clone git://github.com/sorensen/backbone-dnode.git


## Package dependancies (npm)

* [express](http://expressjs.com)
* [socket.io](http://socket.io)
* [jade](http://jade-lang.com)
