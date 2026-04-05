// Que 10 : "Write a C++ program to create a \"Student\" class with course management."


#include <iostream>
#include <string>

using namespace std;


class Student{

private:
    string name;
    string courses[20];
    int count;

public:
    Student(string n){
        name = n;
        count = 0;
    }

    void addCourse(string course){
        if (count < 20){
            courses[count] = course;
            count++;
        }
    }

    void dropCourse(string course){
        for (int i = 0; i < count; i++){
            if (courses[i] == course){
                for (int j = i; j < count - 1; j++){
                    courses[j] = courses[j + 1];
                }

                count--;
                break;
            }
        }
    }

    void showCourses(){
        cout << "Courses of " << name << ":\n";
        for (int i = 0; i < count; i++){
            cout << courses[i] << "\n";
        }
    }
};


int main(){

    Student s("Rahul");

    s.addCourse("AI");
    s.addCourse("CO");
    s.addCourse("C++");

    s.showCourses();

    s.dropCourse("CO");

    cout << "\nAfter dropping one course:\n";
    s.showCourses();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// Courses of Rahul:
// AI
// CO
// C++

// After dropping one course:
// Courses of Rahul:
// AI
// C++