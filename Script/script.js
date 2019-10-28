// bonus01
// Написать программу, которая последовательно запрашивает два числа, 
// после чего сравнивает их и выводит сообщение: 
// «Первое число больше второго», «Второе число больше первого» или «Числа равны». 
// Необходимо учесть ситуации, когда пользователь ввел строку или вообще не ввел ничего.

        function getNumber (index){
            let number;
            do {
                number = prompt('Введите '+ index +'ое число.', index);    
            } while  (isNaN(number) ||  !isFinite(number) || number == null);
            return number;
        }         
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