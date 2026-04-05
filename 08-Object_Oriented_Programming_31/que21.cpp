// Que 21 : "Create a class showing parameterized constructor."


#include <iostream>

using namespace std;


class Demo{

private:
    int value;

public:
    Demo(int v){
        value = v;
    }

    void show(){
        cout << "Value: " << value ;
    }
};


int main(){

    Demo d(25);
    d.show();

    return 0;
}

// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que21.cpp -o que21 } ; if ($?) { .\que21 }
// Value: 25