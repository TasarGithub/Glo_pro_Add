// lesson06-Add

// Создать массив week и записать в него дни недели в виде строк
// ·        Вывести на экран все дни недели
// ·        Каждый из них с новой строчки
// ·        Выходные дни - курсивом
// ·        Текущий день - жирным шрифтом(использовать объект даты

'use strict';

let weekDays= ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let out_array = document.getElementById('out_arr');
let date = new Date();

for (let i = 0; i < weekDays.length; i++){
 
  if (weekDays[i] === 'saturday' || weekDays[i] === 'sunday'){
     if (i === date.getDay() ){
        out_array.innerHTML +='<b> ' + '<i> ' + weekDays[i] + ' </i>'+ ' </b>' + ' <br>';
        } else {
        out_array.innerHTML +='<i> ' + weekDays[i] + ' </i>' + ' <br>';
        } 
    } else if (i === date.getDay() ){
        out_array.innerHTML +='<b> ' + weekDays[i] + ' </b>' + ' <br>';
    } else {
      out_array.innerHTML +=  weekDays[i] + ' <br>';
    }
} 