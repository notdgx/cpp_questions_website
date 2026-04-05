// Que 1 : "Write a C++ program to create a class called \"Person\" with a name and age attribute. Create two instances and print their details."


#include <iostream>
#include <string>

using namespace std;


class Person{

    private:

        string name;
        int age;

    public:

        Person(string n, int a){
            name = n;
            age = a;
        }

        void printDetails(){
            cout << "Name: " << name << ", Age: " << age<<endl;

        }
    };


int main(){

    Person p1("Aman", 21);
    Person p2("Riya", 23);

    p1.printDetails();
    p2.printDetails();

    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Name: Aman, Age: 21
// Name: Riya, Age: 23