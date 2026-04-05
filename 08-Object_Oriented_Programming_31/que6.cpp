// Que 6 : "Write a C++ program to create a class called \"Employee\" with salary calculation methods."


#include <iostream>

using namespace std;


class Employee{

private:
    int basicSalary;
    int bonus;

public:
    Employee(int basic, int b){
        basicSalary = basic;
        bonus = b;
    }

    int calculateSalary(){
        return basicSalary + bonus;
    }
};


int main(){


    Employee emp(100000, 100);

    cout << "Total salary: " << emp.calculateSalary() ;
    return 0;
}


// S E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\que6 }
// Total salary: 100100
