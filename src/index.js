import Component from './component';
import './reset.scss';
import './styles.sass';
import image from './download.png';

const root = document.getElementById('root');
const div = document.createElement('div');
const img = new Image(100, 100);

div.textContent = "Hi webpack";
div.classList.add('block');

img.src = image;

root.append(div, img);

console.log(Component);