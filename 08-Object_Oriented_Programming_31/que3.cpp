// Que 3 : "Write a C++ program to create a class called \"Rectangle\" and calculate area and perimeter."


#include <iostream>

using namespace std;


class Rectangle{

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

        int perimeter(){
            return 2 * (length + width);
        }
};


int main(){

    int length;
    int width;

    cout << "Enter length and width : ";
    cin >> length >> width;

    Rectangle r(length, width);

    cout << "Area: " << r.area();
    cout << "  Perimeter: " << r.perimeter() ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Enter length and width : 3
// 4
// Area: 12  Perimeter: 14