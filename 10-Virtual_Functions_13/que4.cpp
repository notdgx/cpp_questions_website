// Que 4 : "Write a C++ program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create derived classes SavingsAccount and CurrentAccount."


#include <iostream>

using namespace std;


class BankAccount{

protected:
    int balance;

public:
    BankAccount(int b){
        balance = b;
    }

    virtual void deposit(int amount) = 0;
    virtual void withdraw(int amount) = 0;

    void showBalance(){
        cout << "Balance: " << balance << "\n";
    }
};


class SavingsAccount : public BankAccount{

public:
    SavingsAccount(int b) : BankAccount(b){
    }

    void deposit(int amount){
        balance += amount;
        cout << "Savings deposited \n";
    }

    void withdraw(int amount){
        if (amount < balance ){
            cout << "Not enought money \n";
        }

        else{
            balance -= amount;
            cout << "Savings withdrawed amount : "<<amount;
        }
    }
};


class CurrentAccount : public BankAccount{

public:
    CurrentAccount(int b) : BankAccount(b){
    }

    void deposit(int amount){
        balance += amount;
        cout << "Current deposit done\n";
    }

    void withdraw(int amount){
        if (amount < balance ){
            cout << "Not enought money \n";
        }

        else{
            balance -= amount;
            cout << "withdrawed amount : "<<amount;
        }
    }
};


int main(){

    SavingsAccount s(1000);
    CurrentAccount c(1000);

    s.deposit(200);
    s.withdraw(950);
    s.showBalance();

    c.deposit(300);
    c.withdraw(1300);
    c.showBalance();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Savings deposited 
// Not enought money
// Balance: 1200
// Current deposit done
// withdrawed amount : 1300Balance: 0