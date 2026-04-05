// Que 25 : "Create a  Personclass with private variables and getters/setters."


#include <iostream>
#include <string>

using namespace std;


class Person{

private:
    string name;
    int age;

public:
    void setName(string n){
        name = n;
    }

    void setAge(int a){
        if (a >= 0){
            age = a;
        }
    }

    string getName(){
        return name;
    }

    int getAge(){
        return age;
    }
};


int main(){

    Person p;

    p.setName("Ram");
    p.setAge(24);

    cout << "Name: " << p.getName() << "\n";
    cout << "Age: " << p.getAge() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que25.cpp -o que25 } ; if ($?) { .\que25 }
// Name: Ram
// Age: 24