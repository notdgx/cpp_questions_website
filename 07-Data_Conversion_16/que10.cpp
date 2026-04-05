// Que 10 : "C++ Program to convert int to char"


#include <iostream>

using namespace std;


int main(){

    int value;

    cout << "Enter integer value (0 to 127) :";
    cin >> value;

    if (value < 0 || value > 127){
        cout << "Value out of range";
        return 0;
    }

    char ch = (char)value;

    cout << "Converted char value: " << ch ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// Enter integer value (0 to 127) :65
// Converted char value: A