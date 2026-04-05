// Que 2 : "Create a class Fraction to represent fractions. Overload the + operator to add two fractions."


#include <iostream>

using namespace std;


int gcdValue(int a, int b){

    if (a < 0){
        a = -a;
    }

    if (b < 0){
        b = -b;
    }

    while (b != 0){
        int rem = a % b;
        a = b;
        b = rem;
    }

    return a;
}


class Fraction{

private:
    int num;
    int den;

public:
    Fraction(int n = 0, int d = 1){
        num = n;
        den = d;
    }

    Fraction operator+(Fraction other){
        Fraction temp;
        temp.num = num * other.den + other.num * den;
        temp.den = den * other.den;

        int g = gcdValue(temp.num, temp.den);
        if (g != 0){
            temp.num = temp.num / g;
            temp.den = temp.den / g;
        }

        return temp;
    }

    void show(){
        cout << num << "/" << den << "\n";
    }
};


int main(){

    Fraction f1(1, 2);
    Fraction f2(3, 4);

    Fraction f3 = f1 + f2;

    cout << "Result: ";
    f3.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Result: 5/4