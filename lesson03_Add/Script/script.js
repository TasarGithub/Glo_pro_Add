// bonus01
// �������� ���������, ������� ��������������� ����������� ��� �����, 
// ����� ���� ���������� �� � ������� ���������: 
// ������� ����� ������ �������, ������� ����� ������ ������� ��� ������ ������. 
// ���������� ������ ��������, ����� ������������ ���� ������ ��� ������ �� ���� ������.

        let getNumber = function(index){
            let number;
            do {
                number = +prompt('������� '+ index +'�� �����.', index);    
            } while  (number <= 0 || isNaN(number) || number == null) ;
            return number;
        }         
        let number1 = getNumber(1);
        let number2 = getNumber (2);

        do {
            money = +prompt('������� 1�� �����.',1);    
        } while  (money <= 0 || isNaN(money) || money == null) ;

        Expenses2 = prompt('������� 2�� �����.', '������');
        //2) �������� ��������� (��������) �� ������ ������� �� �������� �� ������ 
        //'�� ������� ��� ���������?� � �������  getExpensesMonth
        do {
            ExpensesAmount = +prompt('�� ������� ��� ���������? ', 7000);
        } while  (!(ExpensesAmount > 0));
        
        sum+=ExpensesAmount;
    }
