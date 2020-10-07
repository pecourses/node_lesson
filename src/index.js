// const Component = require("./component");
import Component from "./component";
import "./reset.css";
import "./styles.css";
import "./component.sass";
import "./styles.scss"
import Icon from './icon.png';

const root = document.getElementById("root");
const div = document.createElement("div");
div.textContent = "Hi webpack";
div.classList.add("block");
div.classList.add("component");
root.append(div);


const myIcon = new Image();
   myIcon.src = Icon;

   root.appendChild(myIcon);



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
