// Que 16 : "C++ Program to convert Decimal to Octal"


#include <iostream>

using namespace std;


int main(){

    int decimal;
    int octal[64];
    int index = 0;

    cout << "Enter decimal number: ";
    cin >> decimal;

    if (decimal == 0){
        cout << "Octal value: 0 ";
        return 0;
    }

    while (decimal > 0){
        octal[index] = decimal % 8;
        decimal = decimal / 8;
        index++;
    }

    cout << "Octal value: ";
    for (int i = index - 1; i >= 0; i--){
        cout << octal[i];
    }

    return 0;
}



// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\que16 }
// Enter decimal number: 10047
// Octal value: 23477