'use strict';

// lesson07-Add

// 2) Напишите функцию, которая будет добавлять 0 перед значениями которые состоят
// из одной цифры (из 9:5:3  1.6.2019 сделает 09:05:03 01.06.2019)



// 1) Выведите на страницу текущую дату и время в формате '09:59:59 30.05.2018'

function getLocalMonth(n){
  n++;
  n = (n < 10) ? '0'+ n : n + '';
  return n;
}

let now = new Date();

let printNow = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds()+' '+now.getDate()+'.'+getLocalMonth(now.getMonth())+'.'+now.getFullYear();
console.log('printNow: ', printNow);
document.write(printNow);
