'use strict';

// practice02-Add


const polindrom = (str) => {
  let strR = '' , strL ='', str1 = '',
  arrPolyndroms = [],
  tempStrArr = [];
  let count = str.length;
  for (let j = 0; j < count; j++){
    
    str1 =  str.slice(j);
    for (let i = 0, y = str.length; i <= y; i++) {
    
    
        strR = str1.slice(0,i);

        tempStrArr = strR.split('');
        tempStrArr = tempStrArr.reverse();
        strL = tempStrArr.join('');

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

console.log('polindrom абвгоогвфф,', polindrom('абвгоогвфф'));
console.log('polindrom fffkffgffkfdk,', polindrom('fffkffgffkfdk'));
