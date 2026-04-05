// Que 4 : "Write a C++ program to create a class called \"Circle\" and calculate area and circumference."


#include <iostream>

using namespace std;


class Circle{

    private:
        int radius;

    public:
        Circle(int r){
            radius = r;
        }

        int area(){
            return (22 * radius * radius)/7;
        }

        int circumference(){
            return (2 * 22 * radius) / 7;
        }
};


int main(){

    int radius;

    cout << "Enter radius: ";
    cin >> radius;

    Circle c(radius);

    cout << "Area: " << c.area() << endl;
    cout << "Circumference: " << c.circumference() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Enter radius: 7
// Area: 154
// Circumference: 44