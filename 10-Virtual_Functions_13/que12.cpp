// Que 12 : "Write a C++ program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create derived classes Triangle and Square."


#include <iostream>

using namespace std;


class GeometricShape{

public:
    virtual int area() = 0;
    virtual int perimeter() = 0;
};


class Triangle : public GeometricShape{

    private:    

    int base;
    int height;
    int a;
    int b;
    int c;

    public:


    Triangle(int bs, int h, int x, int y, int z){
        base = bs;
        height = h;
        a = x;
        b = y;
        c = z;
    }

    int area(){

        return (base * height) / 2;
    }

    int perimeter(){
        return a + b + c;

    }
};


class Square : public GeometricShape{

    private:
        int side;

    public:

    Square(int s){
        side = s;
    }

    int area(){
        return side * side;
    }

    int perimeter(){
        return 4 * side;
    }

};


int main(){

    Triangle t(6, 4, 6, 5, 4);
    Square s(5);

    cout << "Triangle : \n";
    cout << "area : " << t.area() << "\n";
    cout << "perimeter : " << t.perimeter() << "\n";
    
    
    cout << "Square  : \n";
    cout << "area : " << s.area() << "\n";
    cout << "perimeter: " << s.perimeter() << "\n";

    return 0;
}



// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\que12 }
// Triangle : 
// area : 12
// perimeter : 15
// Square  :
// area : 25
// perimeter: 20