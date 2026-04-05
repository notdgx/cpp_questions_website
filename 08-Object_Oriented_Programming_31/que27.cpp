// Que 27 : "Create a Rectangle class with private variables."


#include <iostream>

using namespace std;


class Rectangle{

    private:
        int length;
        int width;

    public:
        void setLength(int l){
            if (l > 0){
                length = l;
            }
        }

        void setWidth(int w){
            if (w > 0){
                width = w;
            }
        }

        int area(){
            return length * width;
        }
};


int main(){

    Rectangle r;

    r.setLength(10);
    r.setWidth(4);

    cout << "Area: " << r.area() ;

    return 0;
}


// S E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que27.cpp -o que27 } ; if ($?) { .\que27 }
// Area: 40