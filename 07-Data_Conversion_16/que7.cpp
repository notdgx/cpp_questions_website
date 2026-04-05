// Que 7 : "C++ Program to convert String to double"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    int sign = 1;
    int index = 0;
    int integerPart = 0;
    long fractionPart = 0;
    int divisor = 1;
    int hasDot = 0;

    cout << "Enter double in string form: ";
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

    double value = (double)integerPart + (double)fractionPart / divisor;
    value = value * sign;

    cout << "Converted double value (float mode): " << value ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// Enter double in string form: 4.55
// Converted double value (float mode): 4.55