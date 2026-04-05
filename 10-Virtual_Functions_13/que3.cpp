// Que 3 : "Write a C++ program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create derived classes Circle and Triangle."


#include <iostream>

using namespace std;


class Shape{

public:
    virtual int calculateArea() = 0;
    virtual int calculatePerimeter() = 0;
};


class Circle : public Shape{

private:
    int radius;

public:
    Circle(int r){
        radius = r;
    }

    int calculateArea(){
        return (22 * radius * radius)/7;
    }

    int calculatePerimeter(){
        return (2 * 22 * radius)/7  ;
    }
};


class Triangle : public Shape{

private:
    int a;
    int b;
    int c;
    int height;

public:
    Triangle(int x, int y, int z, int h){
        a = x;
        b = y;
        c = z;
        height = h;
    }

    int calculateArea(){
        return (a * height) / 2;
    }

    int calculatePerimeter(){
        return a + b + c;
    }
};


int main(){

    Circle c(7);
    Triangle t(6, 5, 4, 4);

    cout << "Circle :" << endl;
    cout << "Area : " << c.calculateArea() << endl;
    cout << "Perimeter : " << c.calculatePerimeter() << endl;
    
    cout << "Triangle :" << endl;
    cout << "Area : " << c.calculateArea() << endl;
    cout << "Perimeter : " << c.calculatePerimeter() << endl;


    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Circle :
// Area : 154
// Perimeter : 44
// Triangle :
// Area : 154
// Perimeter : 44