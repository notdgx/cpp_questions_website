// Que 14 : "Write a C++ program to create a School class with students and teachers."


#include <iostream>
#include <string>

using namespace std;


class School{

private:
    string students[100];
    string teachers[50];
    int studentCount;
    int teacherCount;

public:
    School(){
        studentCount = 0;
        teacherCount = 0;
    }

    void addStudent(string name){
        if (studentCount < 100){
            students[studentCount] = name;
            studentCount++;
        }
    }

    void addTeacher(string name){
        if (teacherCount < 50){
            teachers[teacherCount] = name;
            teacherCount++;
        }
    }

    void showDetails(){
        cout << "Students:\n";
        for (int i = 0; i < studentCount; i++){
            cout << students[i] << "\n";
        }

        cout << "Teachers:\n";
        for (int i = 0; i < teacherCount; i++){
            cout << teachers[i] << "\n";
        }
    }
};


int main(){

    School school;

    school.addStudent("Amit");
    school.addStudent("Priya");

    school.addTeacher("Teacher 1");
    school.addTeacher("Teacher 2");

    school.showDetails();

    return 0;
}


// S E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\que14 }
// Students:
// Amit
// Priya
// Teachers:
// Teacher 1
// Teacher 2