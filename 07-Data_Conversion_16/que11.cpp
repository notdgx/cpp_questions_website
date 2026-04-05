// Que 11 : "C++ Program to convert Binary to Decimal"


#include <iostream>

using namespace std;


int main(){

    int binary;
    int decimal = 0;
    int place = 1;

    cout << "Enter binary number: ";
    cin >> binary;

    while (binary > 0){
        int digit = binary % 10;

        if (digit != 0 && digit != 1){
            cout << "Invalid binary number\n";
            return 0;
        }

        decimal += digit * place;
        place = place * 2;
        binary = binary / 10;
    }

    cout << "Decimal value: " << decimal ;
    return 0;
}


// S E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Enter binary number: 1010001
// Decimal value: 81