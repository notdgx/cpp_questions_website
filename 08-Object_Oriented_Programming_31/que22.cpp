// Que 22 : "Create a class showing copy constructor."


#include <iostream>

using namespace std;


class Demo{

private:
    int value;

public:
    Demo(int v){
        value = v;
    }

    Demo(const Demo &other){
        value = other.value;
    }

    void show(){
        cout << "Value: " << value ;

    }
};


int main(){

    Demo d1(10);
    Demo d2 = d1;

    d1.show();
    d2.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que22.cpp -o que22 } ; if ($?) { .\que22 }
// Value: 10Value: 10