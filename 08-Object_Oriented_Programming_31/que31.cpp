// Que 31 : "Create a Student class with grade validation."


#include <iostream>
#include <string>

using namespace std;


class Student{

private:
    string name;
    char grade;

public:
    Student(string n){
        name = n;
        grade = 'F';
    }

    void setGrade(char g){
        if (g == 'A' || g == 'B' || g == 'C' || g == 'D' || g == 'F'){
            grade = g;
        }

        else{
            cout << "Invalid grade\n";
        }
    }

    void show(){
        cout << "Name: " << name << ", Grade: " << grade << "\n";
    }
};


int main(){

    Student s("Meera");

    s.setGrade('A');
    s.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que31.cpp -o que31 } ; if ($?) { .\que31 }
// Name: Meera, Grade: A