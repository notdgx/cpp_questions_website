// Que 16 : "Write a C++ program using abstract Shape class and derived classes."


#include <iostream>

using namespace std;


class Shape{

    public:
        virtual int area() = 0;
    };


    class Rectangle : public Shape{

    private:
        int length;
        int width;

    public:
        Rectangle(int l, int w){
            length = l;
            width = w;
        }

        int area(){
            return length * width;
        }
};


class Circle : public Shape{

private:
    int radius;

public:
    Circle(int r){
        radius = r;
    }

    int area(){
        return (22 * radius * radius) / 7;
    }
};


int main(){

    Rectangle rect(10, 5);
    Circle cir(7);

    cout << "Rectangle area: " << rect.area() << "\n";
    cout << "Circle area: " << cir.area() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\que16 }
// Rectangle area: 50
// Circle area: 154