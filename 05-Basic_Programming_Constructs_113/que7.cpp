// Que 7 : "Write a C++ program to convert a decimal number to binary numbers"


#include <iostream>

using namespace std;


int main(){

    int decimal;
    int binary[64];
    int index = 0;

    cout << "Enter decimal number: ";
    cin >> decimal;

    while (decimal > 0){
        cout<< decimal % 2;
        decimal = decimal / 2;
        index++;
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113> cd "e:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?)
//  { .\que7 }
// Enter decimal number: 67
// 1100001