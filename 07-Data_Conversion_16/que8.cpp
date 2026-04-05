// Que 8 : "C++ Program to convert double to String"


#include <iostream>
#include <string>

using namespace std;


bool isValidDecimal(string text){

    if (text.length() == 0){
        return false;
    }

    int index = 0;
    int hasDot = 0;

    if (text[0] == '-'){
        index = 1;
    }

    if (index == (int)text.length()){
        return false;
    }

    for (int i = index; i < (int)text.length(); i++){
        if (text[i] == '.'){
            if (hasDot == 1){
                return false;
            }

            hasDot = 1;
            continue;
        }

        if (text[i] < '0' || text[i] > '9'){
            return false;
        }
    }

    return true;
}


int main(){

    string value;

    cout << "Enter double value : ";
    cin >> value;

    if (!isValidDecimal(value)){
        cout << "Invalid input\n";
        return 0;
    }

    cout << "Converted string value: " << value ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// Enter double value : 3.333333333333333333333333333333333333333333
// Converted string value: 3.333333333333333333333333333333333333333333