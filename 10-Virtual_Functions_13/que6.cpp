// Que 6 : "Write a C++ program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create derived classes Manager and Programmer."


#include <iostream>
#include <string>

using namespace std;


class Employee{

protected:
    string name;
    int base;

public:
    Employee(string n, int b){
        name = n;
        base = b;
    }

    virtual int calculateSalary() = 0;
    virtual void displayInfo() = 0;
};


class Manager : public Employee{

public:
    Manager(string n, int b) : Employee(n, b){
    }

    int calculateSalary(){
        return base + (base * 20) / 100;
    }

    void displayInfo(){
        cout << "Manager : " << name << "\n Salary: " << calculateSalary() << endl;
    }
};


class Programmer : public Employee{

public:
    Programmer(string n, int b) : Employee(n, b){
    }

    int calculateSalary(){
        return base + (base * 15) / 100;
    }

    void displayInfo(){
        cout << "Programmer : " << name << "\n Salary : " << calculateSalary() << endl;
    }
};


int main(){

    Manager m("Ram", 50000);
    Programmer p("Shyam", 40000);

    m.displayInfo();
    p.displayInfo();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\que6 }
// Manager : Ram
//  Salary: 60000
// Programmer : Shyam
//  Salary : 46000