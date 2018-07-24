import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    //Lodash (目前通过一个 script 脚本引入) 对于执行这一行是必须的
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //将图像添加到我们现有的div
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    // document.write(Date);

    console.log(Data);

    return element;
}

document.body.appendChild(component());