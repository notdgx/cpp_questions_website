// Que 7 : "Write a C++ program to create a \"Bank\" and \"Account\" class for transactions."


#include <iostream>

using namespace std;


class Account{

private:
    int accountNumber;
    int balance;

public:
    Account(int accNo, int bal){
        accountNumber = accNo;
        balance = bal;
    }

    void deposit(int amount){
        balance += amount;
    }

    void withdraw(int amount){
        if (amount > balance){
            cout << "Insufficient balance\n";
        }

        else{
            balance -= amount;
            cout << "Withdrawal successful\n";
        }
    }

    int getBalance(){
        return balance;
    }

    int getAccountNumber(){
        return accountNumber;
    }
};


class Bank{

public:
    void showAccount(Account acc){
        cout << "Account No: " << acc.getAccountNumber() << "\n";
        cout << "Balance: " << acc.getBalance() ;
    }
};


int main(){

    Account acc(1001, 5000);
    Bank bank;

    bank.showAccount(acc);

    acc.deposit(1500);
    acc.withdraw(2000);

    cout << "\nAfter transactions:\n";
    bank.showAccount(acc);

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// Account No: 1001
// Balance: 5000Withdrawal successful

// After transactions:
// Account No: 1001
// Balance: 4500