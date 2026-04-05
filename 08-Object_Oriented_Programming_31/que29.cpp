// Que 29 : "Create a Circle class with area and perimeter methods."


#include <iostream>

using namespace std;


class Circle{

    private:
        int radius;

    public:
        void setRadius(int r){
            if (r >= 0){
                radius = r;
            }
        }

        int area(){
            return (22 * radius * radius) / 7;
        }

        int perimeter(){
            return (2 * 22 * radius) / 7;
        }
    };


int main(){

    Circle c;

    c.setRadius(7);

    cout << "Area: " << c.area() << "\n";
    cout << "Perimeter: " << c.perimeter() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que29.cpp -o que29 } ; if ($?) { .\que29 }
// Area: 154
// Perimeter: 44