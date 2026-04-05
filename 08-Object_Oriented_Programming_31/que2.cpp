// Que 2 : "Write a C++ program to create a class called \"Dog\" with name and breed. Modify using setters and print updated values."


#include <iostream>
#include <string>

using namespace std;


class Dog{

private:
    string name;
    string breed;

public:
    Dog(string n, string b){
        name = n;
        breed = b;
    }

    void setName(string n){
        name = n;
    }

    void setBreed(string b){
        breed = b;
    }

    void printDetails(){
        cout << "Dog Name: " << name << ", Breed: " << breed << endl;
    }
};


int main(){

    Dog d("Tommy", "A");
    d.printDetails();

    d.setName("Bruno");
    d.setBreed("B");

    d.printDetails();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Dog Name: Tommy, Breed: A
// Dog Name: Bruno, Breed: B