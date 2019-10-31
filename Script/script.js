'use strict';

// lesson07-Add-codepen
//1) Добавлять новые <li> элементы с текстом из инпута

let myUl = document.querySelectorAll('ul'),
    myLi = document.querySelectorAll('li'),
    myInpt = document.querySelector('input'),
    myBtn = document.querySelector('button');

myBtn.addEventListener('click', function(){

  let newLi = document.createElement('li');
  newLi.textContent = myInpt.value;
  myUl[0].appendChild(newLi);

});