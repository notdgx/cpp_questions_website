// Que 3 : "C++ Program to convert String to long"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    int sign = 1;
    int index = 0;
    long value = 0;

    cout << "Enter numeric string: ";
    cin >> text;

    if (text.length() == 0){
        cout << "Invalid input\n";
        return 0;
    }

    if (text[0] == '-'){
        sign = -1;
        index = 1;
        
            if (index == (int)text.length()){
                cout << "Invalid input\n";
                return 0;
            }
    }

    for (int i = index; i < (int)text.length(); i++){
        if (text[i] < '0' || text[i] > '9'){
            cout << "Invalid input\n";
            return 0;
        }

        value = value * 10 + (text[i] - '0');
    }

    value = value * sign;

    cout << "Converted long value : " << value ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Enter numeric string: 34343
// Converted long value : 34343