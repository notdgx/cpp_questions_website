// Que 13 : "Write a C++ program to create an abstract class Bird with abstract methods fly() and makeSound(). Create derived classes Eagle and Hawk."


#include <iostream>

using namespace std;


class Bird{

    public:

    virtual void fly() = 0;
    virtual void makeSound() = 0;

};


class Eagle : public Bird{

    public:

    void fly(){
        cout << "Eagle flies \n";
    }

    void makeSound(){
        cout << "Eagle makes sound\n";
    }

};


class Hawk : public Bird{

public:
    void fly(){
        cout << "Hawk flies\n";
    }

    void makeSound(){
        cout << "Hawk makes sound\n";
    }
};


int main(){

    Eagle eagle;
    Hawk hawk;

    eagle.fly();
    eagle.makeSound();

    hawk.fly();
    hawk.makeSound();

    return 0;
}



// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\que13 }
// Eagle flies 
// Eagle makes sound
// Hawk flies
// Hawk makes sound