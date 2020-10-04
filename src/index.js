// const Component = require("./component");
import Component from './component';
import './reset.css';
import './styles.css';
import './Images/10x-featured-social-media-image-size.png';
import './sass/testSass.scss';

const root = document.getElementById('root');
const div = document.createElement('div');
div.textContent = "Hi webpack";
div.classList.add('block');
root.append(div);

console.log(Component);
/*
    How require() works. 

1. Core modules node
2. node_modules
3. filename.js | filename.json
4. directory
    4.1 package.json -> "main"
    4.2 index.js | index.json
5. throw new Error()
*/
