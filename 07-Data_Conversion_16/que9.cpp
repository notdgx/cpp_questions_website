// Que 9 : "C++ Program to convert char to int"


#include <iostream>

using namespace std;


int main(){

    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    int value = (int)ch;

    cout << "Converted int value: " << value ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Enter a character: T
// Converted int value: 84