// Que 2 : "Write a C++ program to create a class called Vehicle with a method called drive(). Create a derived class called Car that overrides the drive() method to print \"Repairing a car\"."


#include <iostream>

using namespace std;


class Vehicle{

    public:
        virtual void drive(){
            cout << "Driving vehicle"<<endl;
        }
};


class Car : public Vehicle{

    public:

        void drive(){
            cout << "driving car";
        }

};


int main(){

    Vehicle vehicle;
    Car car;

    vehicle.drive();
    car.drive();

    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Driving vehicle
// driving car