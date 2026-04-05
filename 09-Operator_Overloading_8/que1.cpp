// Que 1 : "Define a class Complex to represent complex numbers. Overload the + operator to add two complex numbers."


#include <iostream>

using namespace std;


class Complex{

private:
    int real;
    int imag;

public:
    Complex(int r = 0, int i = 0){
        real = r;
        imag = i;
    }

    Complex operator+(Complex other){

        Complex temp;
        temp.real = real + other.real;
        temp.imag = imag + other.imag;
        return temp;
    }

    void show(){
        cout << real << " + " << imag << "i\n";
    }
};


int main(){

    Complex c1(3, 4);
    Complex c2(5, 6);

    Complex c3 = c1 + c2;

    cout << "Result :   ";
    c3.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Result :   8 + 10i