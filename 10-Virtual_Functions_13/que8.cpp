// Que 8 : "Write a C++ program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create derived classes Car and Motorcycle."


#include <iostream>

using namespace std;


class Vehicle{

public:
    virtual void startEngine() = 0;
    virtual void stopEngine() = 0;

};


class Car : public Vehicle{

public:

    void startEngine(){
        cout << "Car engine started \n";
    }

    void stopEngine(){
        cout << "Car engine stopped \n";
    }


};


class Motorcycle : public Vehicle{

public:

    void startEngine(){
        cout << "Motorcycle engine started\n";
    }

    void stopEngine(){
        cout << "Motorcycle engine stopped\n";

    }

};


int main(){

    Car car;

    Motorcycle bike;

    car.startEngine();
    car.stopEngine();

    bike.startEngine();
    bike.stopEngine();

    return 0;
}



// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// Car engine started 
// Car engine stopped
// Motorcycle engine started
// Motorcycle engine stopped