import helloWorld from "./hello-world";

// 加载图片资源
import imgsrc from './assets/home.png';
import bearSvg from './assets/bear.svg';
import exampleTxt from './assets/example.txt';

helloWorld();

const img = document.createElement('img');
img.src = imgsrc;
document.body.appendChild(img);

const img2 = document.createElement('img');
img2.style.cssText = 'width: 600px; height: 700px';
img2.src = bearSvg;
document.body.appendChild(img2);

const  block = document.createElement('div');
block.style.cssText = 'width:200px; height: 200px; background: aliceblue';
block.textContent = exampleTxt;
document.body.appendChild(block);