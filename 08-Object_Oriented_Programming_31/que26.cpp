// Que 26 : "Create a BankAccount class with encapsulation."


#include <iostream>

using namespace std;


class BankAccount{

private:
    int balance;

public:
    BankAccount(){
        balance = 0;
    }

    void deposit(int amount){
        if (amount > 0){
            balance += amount;
        }
    }

    void withdraw(int amount){
        if (amount > 0 && amount <= balance){
            balance -= amount;
        }

        else{
            cout << "Invalid withdrawal\n";
        }
    }

    int getBalance(){
        return balance;
    }
};


int main(){

    BankAccount acc;

    acc.deposit(5000);
    acc.withdraw(1200);

    cout << "Current balance: " << acc.getBalance() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\que26 }
// Current balance: 3800