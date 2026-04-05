// Que 7 : "Write a C++ program to create a class known as Person with methods called getFirstName() and getLastName(). Create a derived class called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title."


#include <iostream>
#include <string>

using namespace std;


class Person{

protected:
    string firstName;
    string lastName;

public:
    Person(string f, string l){
        firstName = f;
        lastName = l;
    }

    string getFirstName(){
        return firstName;
    }

    virtual string getLastName(){
        return lastName;
    }
};


class Employee : public Person{

private:
    int employeeId;
    string jobTitle;

public:
    Employee(string f, string l, int id, string title) : Person(f, l){
        employeeId = id;
        jobTitle = title;
    }

    int getEmployeeId(){
        return employeeId;
    }

    string getLastName(){
        return lastName + " (" + jobTitle + ")";
    }
};


int main(){

    Employee emp("Ram", "Sahrma", 300, "HR");

    cout << "First Name: " << emp.getFirstName() << "\n";
    cout << "Last Name with Title: " << emp.getLastName() << "\n";
    cout << "Employee ID: " << emp.getEmployeeId() << "\n";

    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// First Name: Ram
// Last Name with Title: Sahrma (HR)
// Employee ID: 300