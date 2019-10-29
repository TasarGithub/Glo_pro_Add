// bonus01
// Написать программу, которая последовательно запрашивает два числа, 
// после чего сравнивает их и выводит сообщение: 
// «Первое число больше второго», «Второе число больше первого» или «Числа равны». 
// Необходимо учесть ситуации, когда пользователь ввел строку или вообще не ввел ничего.
'use strict';
// Функция определения числа
const isNum = function(n){
    return (!isNaN(parseFloat(n)) && isFinite(n));
}

function checkNum (num, message, defaultNum){
  do {
    num = prompt(message, defaultNum);
    } while (!isNum(num));
  return  num; 
}

function checkBeginEnd (year1,year2){
  let result ='11';
  if (year1 > year2) {
    let yearTemp = year1;
    console.log('НАЧАЛО year1 , year2: ',  year1 , year2);
    year1 = year2;
    year2 = yearTemp;
    
    console.log(' year1 , year2: ',  year1 , year2);
    console.log('КОНЕЦ year1 , year2: ',  year1 , year2);

    result = year1 + ',' + year2;
    return result;

  } else if (year1 == year2) {
      alert ("Года равны, введите снова");
      year1 = checkNum (year1, "Начальный год", 1970);
      year2 = checkNum(year2, "Конечный год", 1970);

      checkBeginEnd (year1,year2);
  }
  
}

function getNumber (index){
    let number;
    do {
        number = prompt('Введите '+ index +'ое число.', index);    
    } while  (isNaN(number) ||  !isFinite(number) || number == null);
    return number;
}
function task1(){
  // Написать программу, которая последовательно запрашивает два числа, после чего сравнивает их и выводит сообщение: 
  // «Первое число больше второго», «Второе число больше первого» или «Числа равны». 
  // Необходимо учесть ситуации, когда пользователь ввел строку или вообще не ввел ничего.
  let number1 = getNumber(1);
  let number2 = getNumber (2);
  if (number1 > number2) {
      alert('Первое число ' + number1 + ' больше второго ' + number2);
      console.log('Первое число ' + number1 + ' больше второго ' + number2);
  } else if (number1 < number2) {
      alert('Второе число ' + number2 + ' больше первого ' + number1);
      console.log('Второе число ' + number2 + ' больше первого ' + number1);
  } else {
      alert ('Числа равны');
      console.log('Числа равны');
  }
}
function task2 (){
//2
// Написать программу, которая спрашивает у пользователя начальный год и конечный, после выводит в консоль високосные годы.
// Алгоритм определения високосного года следует найти в интернете самостоятельно.
// Если пользователь ввел первый год больше второго, то тот, который меньше, принять за начало отчета, а который больше за конечную точку

//ввод годов 
let yearBegin = 0, //= prompt("Начальный год", 1970),
    yearEnd = 0, //= prompt("Конечный год", 2070),
    yearTemp = 0;

yearBegin = checkNum (yearBegin, "Начальный год", 2070);
yearEnd = checkNum(yearEnd, "Конечный год", 2070);

//Который год больше/меньше

if (yearBegin > yearEnd) {
    yearTemp = yearBegin;
    yearBegin = yearEnd;
    yearEnd = yearTemp;

} else if (yearBegin == yearEnd) {
    alert ("Года равны, введите снова");
    yearBegin = checkNum (yearBegin, "Начальный год", 1970);
    yearEnd = checkNum(yearEnd, "Конечный год", 2115);
}
//сортировка и вывод високосных
for (let y = yearBegin; y <= yearEnd; y++){
  if ((y % 4 == 0)){
    if(!(y % 100 == 0 && y % 400 != 0)){
      console.log ('високосный ', y);
    } 

    }
  }
}
//   Задача №3
// Написать программу, которая запрашивает у пользователя числа при помощи prompt, пока он не нажмет «Отмена». 
// После нажатия «Отмена», программа выводит сумму введенных чисел. 
// Если пользователь ввел не число (а, например, строку), то это значение не суммируется с остальными, а программа продолжает работать. 
// Прерывается только в случае нажатия «Отмена».
function task3(){
  let num = 0,
      inItem;
  do {
      inItem = prompt('Введите число', 1);
      if (isNum(inItem)){
        num+=+inItem;
      }
  } while (inItem !== null);
  console.log (num);
}