// Que 5 : "C++ Program to convert String to float"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    int sign = 1;
    int index = 0;
    int integerPart = 0;
    int fractionPart = 0;
    int divisor = 1;
    int hasDot = 0;

    cout << "Enter float in string form: ";
    cin >> text;

    if (text.length() == 0){
        cout << "Invalid input\n";
        return 0;
    }

    if (text[0] == '-'){
        sign = -1;
        index = 1;
    }

    for (int i = index; i < (int)text.length(); i++){
        if (text[i] == '.'){
            if (hasDot == 1){
                cout << "Invalid input\n";
                return 0;
            }

            hasDot = 1;
            continue;
        }

        if (text[i] < '0' || text[i] > '9'){
            cout << "Invalid input\n";
            return 0;
        }

        if (hasDot == 0){
            integerPart = integerPart * 10 + (text[i] - '0');
        }

        else{
            fractionPart = fractionPart * 10 + (text[i] - '0');
            divisor = divisor * 10;
        }
    }

    float value = (float)integerPart + (float)fractionPart / divisor;
    value = value * sign;

    cout << "Converted float value: " << value ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }
// Enter float in string form: 3232.43
// Converted float value: 3232.43