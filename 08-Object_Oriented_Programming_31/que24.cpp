// Que 24 : "Create a class showing method overloading for area."


#include <iostream>

using namespace std;


    class Area{

    public:
        int calculate(int side){
            return side * side;
        }

        int calculate(int length, int width){
            return length * width;
        }

        int calculate(int base, int height, int mode){
            if (mode == 1){
                return (base * height) / 2;
            }

            return 0;
        }
};


int main(){

    Area a;

    cout << "Area of square: " << a.calculate(5) << "\n";
    cout << "Area of rectangle: " << a.calculate(6, 4) << "\n";
    cout << "Area of triangle: " << a.calculate(8, 5, 1) << "\n";

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que24.cpp -o que24 } ; if ($?) { .\que24 }
// Area of square: 25
// Area of rectangle: 24
// Area of triangle: 20