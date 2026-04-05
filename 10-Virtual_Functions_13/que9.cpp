// Que 9 : "Write a C++ program to create an abstract class Person with abstract methods eat() and exercise(). Create derived classes Athlete and LazyPerson."


#include <iostream>

using namespace std;


class Person{

public:
    virtual void eat() = 0;
    virtual void exercise() = 0;
};


class Athlete : public Person{


public:
    void eat(){
        cout << "Athlete eats Good food \n";
    }

    void exercise(){

        cout << "Athlete exercise daily\n";
    }
};


class LazyPerson : public Person{

public:

    void eat(){
        cout << "Lazy person eats bad food\n";
    }

    void exercise(){
        cout << "Lazy person dont exercise\n";
    }
};


int main(){

    Athlete athlete;
    LazyPerson lazy;

    athlete.eat();
    athlete.exercise();

    lazy.eat();
    lazy.exercise();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Athlete eats Good food 
// Athlete exercise daily
// Lazy person eats bad food
// Lazy person dont exercise