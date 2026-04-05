// Que 10 : "Write a C++ program that creates a class hierarchy for employees of a company. 
//The base class should be Employee, with derived classes Manager, Developer, and Programmer.
// Each derived class should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating
// performance reports, and managing projects."


#include <iostream>
#include <string>

using namespace std;


class Employee{

protected:
    string name;
    string address;
    int salary;
    string jobTitle;

    public:

        Employee(string n, string a, int s, string j){
            name = n;
            address = a;
            salary = s;
            jobTitle = j;
        }

        virtual int calculateBonus(){
            return (salary*2)/100;
        }

        virtual void performanceReport(){
            cout << name << " has good performance " <<endl;
        }

        virtual void manageProject(){
            cout << name << " is managing project "<<endl;
        }

        void showBasicInfo(){
            cout << "Name: " << name << ", Address :  " << address << ", Salary: " << salary << ", Job Title: " << jobTitle <<endl;
        }
};


class Manager : public Employee{

public:
    Manager(string n, string a, int s, string j) : Employee(n, a, s, j){
    }
 
    int calculateBonus(){
        return (salary * 10) / 100;
    }

    void performanceReport(){
        cout << name << " manager perofrmance is good "<<endl;
    }

    void manageProject(){
        cout << name << " manager is managing project "<<endl;
    }
};


class Developer : public Employee{

public:
    Developer(string n, string a, int s, string j) : Employee(n, a, s, j){
    }

    int calculateBonus(){
        return (salary * 15) / 100;
    }

    void performanceReport(){
        cout << name << " is developer and good at work"<<endl;
    }

    void manageProject(){
        cout << name << " is managing code"<<endl;
    }
};


class Programmer : public Employee{

public:
    Programmer(string n, string a, int s, string j) : Employee(n, a, s, j){
    }

    int calculateBonus(){
        return (salary * 12) / 100;
    }

    void performanceReport(){
        cout << name << " is programmer doing good work"<<endl;
    }

    void manageProject(){
        cout << name << " is managing programs"<<endl;
    }
};


int main(){

    Manager manager("Rahul", "Delhi", 80000, "Manager");
    Developer developer("Aman", "Pune", 60000, "Developer");
    Programmer programmer("Neha", "Jaipur", 50000, "Programmer");

    cout << "Manager :\n";
    manager.showBasicInfo();
    cout << "Bonus : " << manager.calculateBonus() << "\n";
    manager.performanceReport();
    manager.manageProject();

    cout << "\nDeveloper : \n";
    developer.showBasicInfo();
    cout << "Bonus : " << developer.calculateBonus() << "\n";
    developer.performanceReport();
    developer.manageProject();

    cout << "\nProgrammer : \n";
    programmer.showBasicInfo();
    cout << "Bonus : " << programmer.calculateBonus() << "\n";
    programmer.performanceReport();
    programmer.manageProject();

    return 0;
}


// PS E:\dddddddd\CPP_Que> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// Manager :
// Name: Rahul, Address :  Delhi, Salary: 80000, Job Title: Manager
// Bonus : 8000
// Rahul manager perofrmance is good
// Rahul manager is managing project

// Developer :
// Name: Aman, Address :  Pune, Salary: 60000, Job Title: Developer
// Bonus : 9000
// Aman is developer and good at work
// Aman is managing code

// Programmer :
// Name: Neha, Address :  Jaipur, Salary: 50000, Job Title: Programmer
// Bonus : 6000
// Neha is programmer doing good work
// Neha is managing programs