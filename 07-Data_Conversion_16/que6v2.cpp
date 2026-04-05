// Que 6 : "C++ Program to convert float to String"


#include <iostream>
#include <string>

using namespace std;


string intToText(int number){

    if (number == 0){
        return "0";
    }

    string reversed = "";
    while (number > 0){
        reversed += (char)('0' + (number % 10));
        number = number / 10;
    }

    string result = "";
    for (int i = (int)reversed.length() - 1; i >= 0; i--){
        result += reversed[i];
    }

    return result;
}


int main(){

    float value;

    cout << "Enter float value: ";
    cin >> value;

    int sign = 1;
    if (value < 0){
        sign = -1;
        value = -value;
    }

    int intPart = (int)value;
    float fraction = value - intPart;

    int threeDigits = (int)(fraction * 1000 + 0.5f);
    if (threeDigits == 1000){
        intPart++;
        threeDigits = 0;
    }

    string text = "";
    if (sign == -1){
        text += '-';
    }

    text += intToText(intPart);
    text += '.';

    text += (char)('0' + (threeDigits / 100));
    text += (char)('0' + (threeDigits / 10) % 10);
    text += (char)('0' + (threeDigits % 10));

    cout << "Converted string value : " << text ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que6v2.cpp -o que6v2 } ; if ($?) { .\que6v2 }
// Enter float value: 233.44
// Converted string value : 233.440