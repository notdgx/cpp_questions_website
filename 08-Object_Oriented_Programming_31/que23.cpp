// Que 23 : "Create a class to auto-generate roll numbers for students."


#include <iostream>
#include <string>

using namespace std;


class Student{

private:
    string name;
    int rollNo;
    static int nextRoll;

public:
    Student(string n){
        name = n;
        rollNo = nextRoll;
        nextRoll++;
    }

    void show(){
        cout << "Name: " << name << ", Roll No: " << rollNo << "\n";
    }
};


int Student::nextRoll = 1;


int main(){

    Student s1("Arun");
    Student s2("Aman");
    Student s3("Raman");

    s1.show();
    s2.show();
    s3.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que23.cpp -o que23 } ; if ($?) { .\que23 }
// Name: Arun, Roll No: 1
// Name: Aman, Roll No: 2
// Name: Raman, Roll No: 3