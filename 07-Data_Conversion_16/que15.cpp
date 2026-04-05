// Que 15 : "C++ Program to convert Octal to Decimal"


#include <iostream>

using namespace std;


int main(){

    int octal;
    int decimal = 0;
    int place = 1;

    cout << "Enter octal number: ";
    cin >> octal;

    while (octal > 0){
        int digit = octal % 10;

        if (digit < 0 || digit > 7){
            cout << "Invalid octal number ";
            return 0;
        }

        decimal += digit * place;
        place = place * 8;
        octal = octal / 10;
    }

    cout << "Decimal valuev: " << decimal ;
    return 0;
}



// S E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\que15 }
// Enter octal number: 23477
// Decimal valuev: 10047