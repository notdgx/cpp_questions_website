// Que 9 : "Write a C++ program to create a vehicle class hierarchy. The base class should be Vehicle, with derived classes Truck, Car and Motorcycle. Each derived class should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed."


#include <iostream>
#include <string>

using namespace std;


class Vehicle{

protected:
    string make;
    string model;
    int year;
    string fuelType;

public:
    Vehicle(string mk, string md, int y, string fuel){
        make = mk;
        model = md;
        year = y;
        fuelType = fuel;
    }

    virtual int fuelEfficiency(){
        return 0;
    }

    virtual int maxSpeed(){
        return 0;
    }

    int distanceTraveled(int fuelUsed){
        return fuelEfficiency() * fuelUsed;
    }

    void showDetails(){
        cout << "Make : " << make << " , Model : " << model << ", Year : " << year << " , Fuel : " << fuelType << "\n";
    }
};


class Truck : public Vehicle{

    public:
        Truck(string mk, string md, int y, string fuel) : Vehicle(mk, md, y, fuel){
        }

        int fuelEfficiency(){
            return 8;
        }

        int maxSpeed(){
            return 120;
        }
    };


class Car : public Vehicle{

    public:

        Car(string mk, string md, int y, string fuel) : Vehicle(mk, md, y, fuel){
        }

        int fuelEfficiency(){
            return 15;
        }

        int maxSpeed(){
            return 180;
        }

    };


class Motorcycle : public Vehicle{

    public:
        Motorcycle(string mk, string md, int y, string fuel) : Vehicle(mk, md, y, fuel){
        }

        int fuelEfficiency(){
            return 35;
        }

        int maxSpeed(){
            return 140;
        }
};


int main(){

    Truck truck("Tata", "Prima", 2022, "Diesel");
    Car car("Honda", "City", 2023, "Petrol");
    Motorcycle bike("Yamaha", "R15", 2024, "Petrol");

    int fuelUsed;

    cout << "Enter fuel used : ";
    cin >> fuelUsed;

    cout << "\n Truck details:\n";
    truck.showDetails();
    cout << "Fuel efficiency : " << truck.fuelEfficiency() << "\n";
    cout << "Distance traveled : " << truck.distanceTraveled(fuelUsed) << "\n";
    cout << "Max speed : " << truck.maxSpeed() << "\n";

    cout << "\nCar details:\n";
    car.showDetails();
    cout << "Fuel efficiency : " << car.fuelEfficiency() << "\n";
    cout << "Distance traveled : " << car.distanceTraveled(fuelUsed) << "\n";
    cout << "Max speed : " << car.maxSpeed() << "\n";

    cout << "\nMotorcycle details:\n";
    bike.showDetails();
    cout << "Fuel efficiency : " << bike.fuelEfficiency() << "\n";
    cout << "Distance traveled : " << bike.distanceTraveled(fuelUsed) << "\n";
    cout << "Max speed : " << bike.maxSpeed() << "\n";

    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Enter fuel used : 45

//  Truck details:
// Make : Tata , Model : Prima, Year : 2022 , Fuel : Diesel
// Fuel efficiency : 8
// Distance traveled : 360
// Max speed : 120

// Car details:
// Make : Honda , Model : City, Year : 2023 , Fuel : Petrol
// Fuel efficiency : 15
// Distance traveled : 675
// Max speed : 180

// Motorcycle details:
// Make : Yamaha , Model : R15, Year : 2024 , Fuel : Petrol
// Fuel efficiency : 35
// Distance traveled : 1575
// Max speed : 140