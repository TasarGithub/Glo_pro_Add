'use strict';

// lesson07-Add

// 2) Напишите функцию, которая будет добавлять 0 перед значениями которые состоят
// из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)
function plusZero(n){
  +n;
  n = (n < 10) ? '0'+ n : n + '';
  return n;
}

// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'

let now = new Date();
console.log('now: ', now + '');

let printNow = plusZero(now.getHours()) + ':' + plusZero(now.getMinutes()) + ':' + plusZero(now.getSeconds()) + 
' ' + plusZero(now.getDate()) + '.' + plusZero(now.getMonth() + 1) + '.' + now.getFullYear();
console.log('printNow: ', printNow);
document.write(printNow);
