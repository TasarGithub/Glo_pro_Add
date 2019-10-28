//Lesson04-Add

// 1
// Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели
// на русском или английском языке. Решите задачу  через if,  через switch-case 
// через многомерный массив без ифов и switch.
let lang = prompt ('Укажите язык en/ru','ru'),
    arrayDays = [['понедельник', 'вторник', 'среда', 'четврег', 'пятница', 'суббота', 'воскресенье'],
    ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']],
    result = ' ';
const enDay = 'monday, tuesday, wednesday, thursday.friday.saturday.sunday',
      ruDay = 'понедельник, вторник, среда, четврег, пятница, суббота, воскресенье';
lang = lang.trim();

console.log ('if');
  if (lang === 'ru'){
    console.log (ruDay);
  } else if (lang === 'en'){
    console.log (enDay);
  } else {
    console.log ('Что-то не так');
  }
console.log ('switch');
switch (lang){
  case 'ru':
    console.log (ruDay);
    break;
  case 'en':
    console.log (enDay);
    break;
  default:
    console.log ('Опять Что-то не так');  
}
console.log ('многомерный массив');
result = (lang === 'ru'|| lang === 'en')?
  ((lang === 'ru')? arrayDays[0] : arrayDays[1]) : 'Ну что опять не так?';
  console.log(result);
// 2
// У нас есть переменная namePerson. Если значение этой переменной “Артем” 
// то вывести в консоль “директор”, если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = prompt ('Имя', 'Максим');
namePerson = namePerson.trim();
result = (namePerson === 'Артем' || namePerson === 'Максим') ?
 ((namePerson === 'Артем')? 'директор' : 'преподаватель') : 'студенты';
console.log (result);
