// Que 4 : "Write a C++ program to create a class called Employee with methods called work() and getSalary(). Create a derived class called HRManager that overrides the work() method and adds a new method called addEmployee()."


#include <iostream>

using namespace std;


class Employee{


    protected:
        int salary;

    public:

        Employee(int s){
            salary = s;
        }

        virtual void work(){
            cout << "Employee is working \n"; 
        }

        int getSalary(){
            return salary;
        }
};


class HRManager : public Employee{

    public:
        HRManager(int s) : Employee(s){
        }

        void work(){
            cout << "HR Manager is working t\n";
        }

        void addEmployee(){
            cout << "employee added\n";
        }
};


int main(){

    HRManager hr(50000);

    hr.work();
    hr.addEmployee();
    cout << "Salary : " << hr.getSalary() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// HR Manager is working t
// employee added
// Salary : 50000