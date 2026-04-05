// Que 4 : "C++ Program to convert long to String"


#include <iostream>
#include <string>

using namespace std;


string toText(long number){

    if (number == 0){
        return "0";
    }

    int sign = 1;
    if (number < 0){
        sign = -1;
        number = -number;
    }

    string reversed = "";
    while (number > 0){
        reversed += (char)('0' + (number % 10));
        number = number / 10;
    }

    string result = "";
    if (sign == -1){
        result += '-';
    }

    for (int i = (int)reversed.length() - 1; i >= 0; i--){
        result += reversed[i];
    }

    return result;
}


int main(){

    int value;

    cout << "Enter long value : ";
    cin >> value;

    string text = toText(value);

    cout << "Converted string value: " << text ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Enter long value : 22222
// Converted string value: 22222