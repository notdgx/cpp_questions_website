// Que 7 : "Create a class Rectangle to represent rectangles. Overload the == operator to check if two rectangles are equal."


#include <iostream>

using namespace std;


class Rectangle{

    private:

        int length;
        int width;

    public:

    Rectangle(int l = 0, int w = 0){
        length = l;
        width = w;
    }

    bool operator==(Rectangle other){
        if (length == other.length && width == other.width){
            return true;
        }

        return false;
    }
};


int main(){

    Rectangle r1(10, 5) ,r2(10, 5) ;

    if (r1 == r2){
        cout << "Rectangles equal";

    }

    else{
        cout << "Rectangles not equal";
    }

    return 0;
}



// PS E:\dddddddd\CPP_Que\09-Operator_Overloading_8> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// Rectangles equal