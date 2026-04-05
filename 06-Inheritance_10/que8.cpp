// Que 8 : "Write a C++ program to create a class called Shape with methods called getPerimeter() and getArea(). Create a derived class called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle."


#include <iostream>

using namespace std;


class Shape{

    public:

        virtual int getPerimeter(){
            return 0;
        }

        virtual int getArea(){
            return 0;
        }
};


class Circle : public Shape{

    private:

        int radius;

    public:

        Circle(int r){
            radius = r;
        }

        int getPerimeter(){
            return (2 * 22 * radius) / 7;
        }

        int getArea(){
            return (22 * radius * radius) / 7;
        }
};


int main(){


    Circle circle(7);

    cout << "Perimeter of circle : " << circle.getPerimeter() << "\n";
    cout << "Area of circle : " << circle.getArea() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// Perimeter of circle : 44
// Area of circle : 154