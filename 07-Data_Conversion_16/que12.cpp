// Que 12 : "C++ Program to convert Decimal to Binary"


#include <iostream>

using namespace std;


int main(){

    int decimal;
    int binary[64];
    int index = 0;

    cout << "Enter decimal number: ";
    cin >> decimal;

    if (decimal == 0){
        cout << "Binary value: 0 ";
        return 0;
    }

    while (decimal > 0){
        binary[index] = decimal % 2;
        decimal = decimal / 2;
        index++;
    }

    cout << "Binary value : ";
    for (int i = index - 1; i >= 0; i--){
        cout << binary[i];
    }

    return 0;
}


// S E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Enter binary number: 1010001
// Decimal value: 81