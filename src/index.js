// const Component = require("./component");
import Component from './component';
import './reset.scss';
// import './styles.css';
import './style.scss';

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
