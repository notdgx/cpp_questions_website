// Que 14 : "C++ Program to convert Decimal to Hex"


#include <iostream>
#include <string>

using namespace std;


int main(){

    int decimal;
    string hex = "";

    cout << "Enter decimal number: ";
    cin >> decimal;

    if (decimal == 0){
        cout << "Hex value: 0 ";
        return 0;
    }

    while (decimal > 0){
        int rem = decimal % 16;

        if (rem < 10){
            hex += (char)('0' + rem);
        }

        else{
            hex += (char)('A' + (rem - 10));
        }

        decimal = decimal / 16;
    }

    string result = "";
    for (int i = (int)hex.length() - 1; i >= 0; i--){
        result += hex[i];
    }

    cout << "Hex value : " << result ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\que14 }
// Enter decimal number: 3291837
// Hex value : 323ABD