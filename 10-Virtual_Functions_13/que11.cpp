// Que 11 : "Write a C++ program to create an abstract class Shape2D with abstract methods draw() and resize(). Create derived classes Rectangle and Circle."


#include <iostream>

using namespace std;


class Shape2D{

public:
    virtual void draw() = 0;
    virtual void resize(int value) = 0;
};


class Rectangle : public Shape2D{

private:
    int length;
    int width;

public:
    Rectangle(int l, int w){
        length = l;
        width = w;
    }

    void draw(){
        cout << "Rectangle : " << length << " x " << width << endl;
    }

    void resize(int value){
        length = length + value;
        width = width + value;
    }
};


class Circle : public Shape2D{

private:
    int radius;

public:
    Circle(int r){
        radius = r;
    }

    void draw(){
        cout << "Circle radius : " << radius << endl;
    }

    void resize(int value){
        radius = radius + value;
    }
};


int main(){

    Rectangle rect(10, 6);
    Circle cir(7);

    rect.draw();
    cir.draw();

    rect.resize(2);
    cir.resize(3);

    cout << "Resizing : \n";
    rect.draw();
    cir.draw();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Rectangle : 10 x 6
// Circle radius : 7
// Resizing :
// Rectangle : 12 x 8
// Circle radius : 10