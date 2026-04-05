// Que 5 : "Write a C++ program to create an abstract class Animal with abstract methods eat() and sleep(). Create derived classes Lion, Tiger, and Deer."


#include <iostream>

using namespace std;


class Animal{

public:
    virtual void eat() = 0;
    virtual void sleep() = 0;
};


class Lion : public Animal{

public:
    void eat(){
        cout << "Lion eats \n";
    }

    void sleep(){
        cout << "Lion sleeps \n";
    }
};


class Tiger : public Animal{

public:
    void eat(){
        cout << "Tiger eats \n";
    }

    void sleep(){
        cout << "Tiger sleeps \n";
    }
};


class Deer : public Animal{

public:
    void eat(){
        cout << "Deer eats \n";
    }

    void sleep(){
        cout << "Deer sleeps \n";
    }
};


int main(){

    Lion lion;
    Tiger tiger;
    Deer deer;

    lion.eat();
    lion.sleep();

    tiger.eat();
    tiger.sleep();

    deer.eat();
    deer.sleep();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }
// Lion eats 
// Lion sleeps
// Tiger eats
// Tiger sleeps
// Deer eats
// Deer sleeps