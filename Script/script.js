'use strict';

// practice02-Add

// идем по строке слева направо, вырезая от 1 символв вправо  до шаг вправо еще символ вырезаем и сравнивам эти строки, если они равны, то записваем в массив
// полиндромов

const polindrom = (str) => {
  let strR = '' , strL ='', str1 = '',
  arrPolyndroms = [],
  tempStrArr = [];
  let count = str.length;
  for (let j = 0; j < count; j++){
    
    str1 =  str.slice(j);
    console.log('str.length:, j ',  j);
    
    console.log('str str.length: ++++++++++', str1, str1.length);
    //count--;
    for (let i = 0, y = str.length; i <= y; i++) {
    
    
        strR = str1.slice(0,i);
        console.log('strR: ', strR);
        tempStrArr = strR.split('');
        tempStrArr = tempStrArr.reverse();
        strL = tempStrArr.join('');
        console.log('strL: ', strL);
        if (strR === strL && strR.length > 2){
          arrPolyndroms.push(strR);
        }
    
    }
  }
  arrPolyndroms.sort((a, b) => a.length - b.length);
  console.log('arrPolyndroms: ', arrPolyndroms);
  arrPolyndroms.reverse();
  return arrPolyndroms[0];
  
};

// const polindrom = (str2) => {
//   let strR = '' , strL ='',
//   arrPolyndromsMain = [],
//   tempStrArr = []
  
//   console.log('str.lenght: ', str2.length);
//   for (let i = 0, y = str2.length; i < y; i++) {
//     arrPolyndromsMain.concat(polindromOne(str2));
//     str2 = str2.slice(0, str2.length-1);
//     console.log('str: ', str2);
//   }
//   return arrPolyndromsMain;
// };

// const polindromMain = (str3) => {
//   let arrMain = [];
//   arrMain.concat(polindromOne(str3));
//   //polindrom (str3);

//   let tempStrArr = str3.split('');
//   tempStrArr = tempStrArr.reverse();
//   const strL = tempStrArr.join('');

//   console.log('strL:********************************************************* ', strL);
//   arrMain.concat(polindromOne(strL));
//   return arrMain;
// };

console.log('polindrom абвгоогвфф,', polindrom('абвгоогвфф'));
