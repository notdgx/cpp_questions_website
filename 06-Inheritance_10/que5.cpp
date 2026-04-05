// Que 5 : "Write a C++ program to create a class known as \"BankAccount\" with methods called deposit() and withdraw(). Create a derived class called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred."


#include <iostream>

using namespace std;


class BankAccount{

protected:
    int balance;

public:
    BankAccount(int amount){
        balance = amount;
    }

    void deposit(int amount){
        balance += amount;
    }

    virtual void withdraw(int amount){
        if (amount > balance){
            cout << "not enough balance\n";
        }

        else{
            balance -= amount;
            cout << "Withdrawed \n";
        }
    }

    int getBalance(){
        return balance;
    }
};


class SavingsAccount : public BankAccount{

public:
    SavingsAccount(int amount) : BankAccount(amount){
    }

    void withdraw(int amount){
        if (balance - amount <100){
            cout << "min blaance 100 required \n";
        }

        else{
            balance -= amount;
            cout << "Withdrawed \n";
        }
    }
};


int main(){

    SavingsAccount account(500);
    int a;
    int b;

    cout << "Current balance : " << account.getBalance()<<endl;
    cout << "Enter deposit amount : ";
    cin >> a;
    
    account.deposit(a);
    
    cout << "Current balance : " << account.getBalance()<<endl;
    cout << "Enter withdraw amount : ";
    cin >> b;

    account.withdraw(b);
    cout << "Current balance : " << account.getBalance();

    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }                   
// Current balance : 500
// Enter deposit amount : 400
// Current balance : 900
// Enter withdraw amount : 866
// min blaance 100 required 
// Current balance : 900