// Que 28 : "Create an Employeeclass with formatted salary getter."


#include <iostream>

using namespace std;


class Employee{

    private:
        int salary;

    public:
        void setSalary(int s){
            if (s >= 0){
                salary = s;
            }
        }

        int getSalary(){
            return salary;
        }

        void showSalary(){
            cout << "Salary:  " << salary ;
        }
};


int main(){

    Employee e;

    e.setSalary(45000);
    e.showSalary();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que28.cpp -o que28 } ; if ($?) { .\que28 }
// Salary:  45000