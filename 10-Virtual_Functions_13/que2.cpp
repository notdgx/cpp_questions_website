// Que 2 : "Write a C++ program to create an abstract class Animal with an abstract method called sound(). Create derived classes Lion and Tiger that implement the sound() method."


#include <iostream>

using namespace std;


class Animal{

public:
    virtual void sound() = 0;
};


class Lion : public Animal{

public:
    void sound(){
        cout << "Lion sound \n";
    }
};


class Tiger : public Animal{

public:
    void sound(){
        cout << "Tiger sound\n";
    }
};


int main(){

    Lion lion;
    Tiger tiger;

    lion.sound();
    tiger.sound();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Lion sound 
// Tiger sound