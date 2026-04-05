// Que 3 : "Write a C++ program to create a class called Shape with a method called getArea(). Create a derived class called Rectangle that overrides the getArea() method to calculate the area of a rectangle."


#include <iostream>

using namespace std;


class Shape{

    public:

        virtual int getArea(){
            return 0;
        }
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

        int getArea(){
            return length * width;
        }
    };


int main(){

    Rectangle rectangle(9, 6);

    cout << "Area of rectangle : " << rectangle.getArea() ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\06-Inheritance_10> cd "e:\dddddddd\CPP_Que\06-Inheritance_10\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Area of rectangle : 54