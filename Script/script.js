//Lesson04-Add

// 1) Создайте функцию, которая принимает 1 аргумент (название произвольное)
// — Если как аргумент передана не строка - функция оповещает об этом пользователя
// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
// — Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)

'use strict';

function appString(str) {

  if (typeof(str) !== 'string'){
    alert ('введена не строка - ' + str + ',тип '+ typeof(str) );
    return ' э слюшай да, строку вводи, да ээ';
  } else {
    str.trim();
    if (str.length > 30) {
      str =  str.substring(0,30) + '...';
    }
  }
  return str;
}

console.log ('Вводим не строку', appString(10));
console.log ('Вводим строку больше 30 знаков -> получаем', appString('123456789123456789123456789999999999---'));