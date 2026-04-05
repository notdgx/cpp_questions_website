// Que 8 : "Write a C++ program to convert a binary number to decimal number"


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
        decimal += digit * place;
        place = place * 2;
        binary = binary / 10;
    }

    cout << "Decimal number : " << decimal ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113> cd "e:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?)
//  { .\que8 }
// Enter binary number: 1111111
// Decimal number : 127