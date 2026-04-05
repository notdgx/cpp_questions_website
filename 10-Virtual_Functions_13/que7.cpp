// Que 7 : "Write a C++ program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create derived classes Sphere and Cube."


#include <iostream>

using namespace std;


class Shape3D{

public:
    virtual int calculateVolume() = 0;
    virtual int calculateSurfaceArea() = 0;
};


class Sphere : public Shape3D{

private:
    int radius;

public:
    Sphere(int r){
        radius = r;
    }

    int calculateVolume(){
        return (4*22 * radius * radius * radius) /(3*7);
    }

    int calculateSurfaceArea(){
        return (4*22 * radius * radius)/7;
    }
};


class Cube : public Shape3D{

private:
    int side;

public:
    Cube(int s){
        side = s;
    }

    int calculateVolume(){
        return side * side * side;
    }

    int calculateSurfaceArea(){
        return 6 * side * side;
    }
};


int main(){

    Sphere sp(4);
    Cube cb(5);

    cout<<"Sphere : \n";
    cout << "Volume : " << sp.calculateVolume() << endl;
    cout << "Surface Area : " << sp.calculateSurfaceArea() <<endl;
    
    cout<<"Cubr : \n";
    cout << "Volume : " << cb.calculateVolume() << endl;
    cout << "Surface Area : " << cb.calculateSurfaceArea() << endl;

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// Sphere : 
// Volume : 268
// Surface Area : 201
// Cubr :
// Volume : 125
// Surface Area : 150