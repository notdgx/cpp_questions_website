// Que 6 : "Implement a class Money to represent money. Overload the + operator to add two amounts of money."


#include <iostream>

using namespace std;


class Money{

private:
    float money;

public:
    Money(float m = 0){
        money = m ;
    }

    Money operator+(Money other){
        Money temp;
        temp.money = money + other.money;
        return temp;
    }

    void show(){
        cout << "Money is : "<< money ;
    }
};


int main(){

    Money m1(34);
    Money m2(56.9);

    Money m3 = m1 + m2;

    cout << "Total money: ";
    m3.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\09-Operator_Overloading_8> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\que6 }
// Total money: Money is : 90.9