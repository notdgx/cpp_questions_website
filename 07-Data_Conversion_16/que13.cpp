// Que 13 : "C++ Program to convert Hex to Decimal"


#include <iostream>
#include <string>

using namespace std;


int hexValue(char ch){

    if (ch >= '0' && ch <= '9'){
        return ch - '0';
    }

    if (ch >= 'A' && ch <= 'F'){
        return 10 + (ch - 'A');
    }

    if (ch >= 'a' && ch <= 'f'){
        return 10 + (ch - 'a');
    }

    return -1;
}


int main(){

    string hex;
    int decimal = 0;

    cout << "Enter hex value : ";
    cin >> hex;

    for (int i = 0; i < (int)hex.length(); i++){
        int value = hexValue(hex[i]);

        if (value == -1){
            cout << "Invalid hex value";
            return 0;
        }

        decimal = decimal * 16 + value;
    }

    cout << "Decimal value : " << decimal ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\que13 }
// Enter hex value : 323ABD
// Decimal value : 3291837