// bonus01

'use strict';

// Функция определения числа
const isNum = function(n){
    return (!isNaN(parseFloat(n)) && isFinite(n));
}

function checkNum (message, defaultNum){
  let num = 0;
  do {
    num = prompt(message, defaultNum);
    //if (num === null) break;
    } while (!isNum(num) && (num !== null));
  return  num; 
}

function checkBeginEnd (year){
  
//  debugger;
  if (year[0] > year[1]) {

    year.reverse();

    return year;

  } else if (year[0] === year[1]) {
    
      alert ("Года равны, введите снова");
      year[0] = +checkNum ("Начальный год", 2970);
      year[1] = +checkNum("Конечный год", 70);
    
      return checkBeginEnd (year);
  }
}

function getNumber (index){
  let number;

  do {
      number = prompt('Введите '+ index +'ое число.', index);    
  } while  (!isNum(number));
  
  return number;
}


function task1(){
  // Написать программу, которая последовательно запрашивает два числа, после чего сравнивает их и выводит сообщение: 
  // «Первое число больше второго», «Второе число больше первого» или «Числа равны». 
  // Необходимо учесть ситуации, когда пользователь ввел строку или вообще не ввел ничего.
  alert ('Задача №1');

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

alert ('Задача №2');
//ввод годов 
let yearArr = [1,2];

yearArr[0] = +checkNum ("Начальный год", 2070);
yearArr[1] = +checkNum ("Конечный год", 2070);

//Который год больше/меньше
yearArr = checkBeginEnd (yearArr);

//сортировка и вывод високосных
console.log('перед вискоксием year1 , year2: ',  yearArr);
for (let y = yearArr[0]; y <= yearArr[1]; y++){
  if ((y % 4 == 0)){
      if(!(y % 100 == 0 && y % 400 != 0)){
        console.log ('високосный ', y);
      } 
    }
  }
} //end task2

//   Задача №3
// Написать программу, которая запрашивает у пользователя числа при помощи prompt, пока он не нажмет «Отмена». 
// После нажатия «Отмена», программа выводит сумму введенных чисел. 
// Если пользователь ввел не число (а, например, строку), то это значение не суммируется с остальными, а программа продолжает работать. 
// Прерывается только в случае нажатия «Отмена».
function task3(){
  alert ('Задача №3');
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

// Написать простой игровой бот, который:
// 1) Загадывает число от 1 до 100
// 2) Задает вопрос пользователю: «Угадай число»
// 3) Если пользователь ввел число меньше, чем загаданное, то бот сообщает «Больше!» и предлагает ввести новый вариант
// 4) Если пользователь ввел число больше, чем загаданное, то бот выводит «Меньше!» и предлагает ввести новый вариант
// 5) Если пользователь ввел правильное число, то бот выводит «Поздравляю вы угадали!!!»
// 6) После угаданного число бот спрашивает «Хотите сыграть еще?»
// 7) Если пользователь ввел не число, то выводит «Введи число!» и предлагает ввести новый вариант
// 8) Если пользователь нажимает «Отмена», то игра заканчивается

function game(num){
  let inItem = 0;
  //do{
    
      if (isNum(inItem)){
        if (inItem < num){
          inItem = prompt ('Больше! введите еще', 1);
          continue;
        } else if (inItem > num){
          inItem = prompt ('Меньше! введите еще', 1);
          continue;
        } else {
          alert ( 'Число =' + inItem + 'Поздравляю вы угадали!!!');
         
        } 
      }
    //} while (inItem !== null);
  }

function task4(){
  let num = 0,
  i = 0;
  debugger;
  num = Math.trunc((Math.random())*10);
  let inItem = checkNum ('Угадай число!', 1);
  game(num,inItem);
  
  while ( confirm('Хотите сыграть еще?')) { 
    inItem = checkNum ('Введи число!', 1);
    if (inItem === null) break;
    
    else {
      num = Math.trunc((Math.random())*10);
      game(num,inItem);
    } 
    
    // if (){
    //   continue;
    // } else {
    //   alert ('Конец!');
    //   break;
    // }
  }
}


// task1();
// task2();
// task3();
task4();