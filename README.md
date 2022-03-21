<h1 align="center">
	3D-Human-Model
</h1>

<div align="center">

<strong>Computer Graphics project which implements a 3D human model that simulates the most common human body movements and also have some other functionalities.</strong><br>

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/playeredlc/3D-Human-Model/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/2a5fa3f0-be4a-4ccd-af16-b68c5ad529f4/deploy-status)](https://threedim-human.netlify.app/)

Check online: [threedim-human.netlify.app/](https://threedim-human.netlify.app/)

[About](#about)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[Features](#features)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[Tech](#technologies)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
[How to run](#running-locally)

</div>

## About
This project implements a 3-dimensional model that simulates the most common human body movements, developed to apply some concepts of the computer graphics field. It also allows to define areas of pain associated with these movements, such functionality might be useful in some medical applications.

<strong>I'm not the author of the 3D mesh, it is available for free use at [Blend Swap](https://blendswap.com/blend/24118). The mesh author is [PIXXO 3D](https://www.youtube.com/c/PIXXO3D), who creates awesome content about 3D modeling on YouTube.</strong>

I used [Blender](https://www.blender.org/) to apply the 3D Rigging, which is the process of creating the model's bone structure, used to manipulate and allow movements to be implemented.

## Features
#### Simulate human body movements
* <i>Head / Torso</i>

<p float="left">
	<img src="https://media4.giphy.com/media/XaeAp1MDFO8NofiCZs/giphy.gif?cid=790b7611a112e1c8509f8c5780e0fa8d40245f92a2b295df&rid=giphy.gif&ct=g" width="250" height="250" />
	<img src="https://media0.giphy.com/media/yzGDsqJkANylpsy388/giphy.gif?cid=790b76110b61e5f832552580aacbb4e6651679d342bad44b&rid=giphy.gif&ct=g" width="250" height="250" />
</p>

* <i>Upper / Lower Limbs</i>

<p float="left">
	<img src="https://media0.giphy.com/media/Pzm7zJYygB0nIbQBCL/giphy.gif?cid=790b761181195f6892bb81593b359439447a300d18d88907&rid=giphy.gif&ct=g" width="250" height="250" />
	<img src="https://media0.giphy.com/media/KoZ4LHm3KEW5oeZwhf/giphy.gif?cid=790b76119bc4cc69860634e94dc25ed47fe5944879419e84&rid=giphy.gif&ct=g" width="250" height="250" />
</p>

#### Attach and Save pain spot to model
<img src="https://media.giphy.com/media/QdVB8dUUiNsII2kAfa/giphy.gif" width="300" height="300" />


## Technologies
* HTML / CSS / JavaScript
* [Three.js](https://threejs.org/) 
* [Blender](https://www.blender.org/)
* [dat.GUI](https://github.com/dataarts/dat.gui)

## Running locally
To run this project locally, you will need [Git](https://git-scm.com/) to clone the repository and a server to serve the files to the browser, I suggest using [Python](https://www.python.org/) for the simplicity.

```
# clone this repository
$ git clone https://github.com/playeredlc/3D-Human-Model

# go to the root of the directory
$ cd 3D-Human-Model

# launch the local server using the 'start-server' script (make sure it is executable)
$ sudo chmod +x start-server
$ ./start-server

# you can find the page being served locally at 
# http://localhost:8000
```

---

<strong><i> </> </i></strong> Developed by <strong>edlc</strong>. [Get in touch!](https://github.com/playeredlc) :metal:
