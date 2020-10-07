// const Component = require("./component");
import Component from './assets/js/component';
import './assets/css/reset.css';
import './assets/css/styles.css';
import './assets/css/styles.scss';
import './assets/css/styles.sass';
import jsJpg from './assets/images/js-logo.jpg';
import webpackJpe from './assets/images/webpack-logo.jpeg';
import reactPng from './assets/images/react-logo.png';
import nodejsSvg from './assets/images/nodejs-logo.svg';
import fsGif from './assets/images/fullstack.gif';

const root = document.getElementById('root');
const div = document.createElement('div');
const p = document.createElement('p');
div.textContent = "Hi webpack";
div.classList.add('block');
p.classList.add("imgBlock");

const imgSrcArray = [jsJpg, webpackJpe, reactPng, nodejsSvg, fsGif];

const imgDomArray = [];

for (const src of imgSrcArray) {
    const img = new Image();
    img.src = src;
    imgDomArray.push(img);
}

p.append(...imgDomArray)

root.append(div, p);

console.log(Component);

/*
    How require() works. 
1. Core modules nod
2. node_modules
3. filename.js | filename.json
4. directory
    4.1 package.json -> "main"
    4.2 index.js | index.json
5. throw new Error()
*/
