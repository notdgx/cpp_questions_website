// Que 1 : "Write a C++ program to create a class called Animal with a method called makeSound(). Create a derived class called Cat that overrides the makeSound() method to bark."


#include <iostream>

using namespace std;


class Animal{

public:
    virtual void makeSound(){
        cout << "Animal sound";
    }
};


class Cat : public Animal{

public:
    void makeSound(){
        cout << "Bark";
    }
};


int main(){

    Animal animal;
    Cat cat;

    animal.makeSound();
    cat.makeSound();

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Animal soundBark