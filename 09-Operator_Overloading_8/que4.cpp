// Que 4 : "Implement a class StringClass to represent StringClasss. Overload the + operator to concatenate two StringClasss."


#include <iostream>
#include <string>

using namespace std;


class StringClass{

private:
    string text;

public:
    StringClass(string t = ""){
        text = t;
    }

    StringClass operator+(StringClass other){
        StringClass temp;
        temp.text = text + other.text;
        return temp;
    }

    void show(){
        cout << text ;
    }
};


int main(){

    StringClass s1("Hello");
    StringClass s2("World");

    StringClass s3 = s1 + s2;

    cout << "Concatenated strings : ";
    s3.show();

    return 0;
}



// PS E:\dddddddd\CPP_Que\09-Operator_Overloading_8> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Concatenated strings : HelloWorld