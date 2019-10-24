// bonus01
// Написать программу, которая последовательно запрашивает два числа, 
// после чего сравнивает их и выводит сообщение: 
// «Первое число больше второго», «Второе число больше первого» или «Числа равны». 
// Необходимо учесть ситуации, когда пользователь ввел строку или вообще не ввел ничего.

        let getNumber = function(index){
            let number;
            do {
                number = +prompt('Введите '+ index +'ое число.', index);    
            } while  (number <= 0 || isNaN(number) || number == null) ;
            return number;
        }         
        let number1 = getNumber(1);
        let number2 = getNumber (2);

        do {
            money = +prompt('Введите 1ое число.',1);    
        } while  (money <= 0 || isNaN(money) || money == null) ;

        Expenses2 = prompt('Введите 2ое число.', 'Кредит');
        //2) Добавить валидацию (проверку) на данные которые мы получаем на вопрос 
        //'Во сколько это обойдется?’ в функции  getExpensesMonth
        do {
            ExpensesAmount = +prompt('Во сколько это обойдется? ', 7000);
        } while  (!(ExpensesAmount > 0));
        
        sum+=ExpensesAmount;
    }
