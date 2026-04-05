// Que 30 : "Create a Cae class with controlled access to mileage."


#include <iostream>

using namespace std;


class Car{

    private:
        int mileage;

    public:
        Car(){
            mileage = 0;
        }

        void setMileage(int m){
            if (m >= 0){
                mileage = m;
            }

            else{
                cout << "Invalid mileage";
            }
        }

        int getMileage(){
            return mileage;
        }
};


int main(){

    Car c;

    c.setMileage(18);
    cout << "Mileage: " << c.getMileage() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que30.cpp -o que30 } ; if ($?) { .\que30 }
// Mileage: 18