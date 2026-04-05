// Que 2 : "C++ Program to convert int to String"


#include <iostream>
#include <string>

using namespace std;


string tostr(int number){

    if (number == 0){
        return "0";
    }

    int sign = 1;
    if (number < 0){
        sign = -1;
        number = -number;
    }

    //1334

    // 4 3 3 1

    string reversed = "";
    while (number > 0){
        int digit = number % 10;
        reversed += (char)('0' + digit);
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

    int number;

    cout << "Enter integer value : ";
    cin >> number;

    string text = tostr(number);

    cout << "Converted string value : " << text ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Enter integer value : 34343
// Converted string value : 34343