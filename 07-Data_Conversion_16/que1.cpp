// Que 1 : "C++ Program to convert String to int"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    int sign = 1;
    int index = 0;
    int number = 0;

    cout << "Enter numeric string: ";
    cin >> text;

    if (text.length() == 0){
        cout << "Invalid input \n";
        return 0;
    }

    if (text[0] == '-'){
        sign = -1;
        index = 1;
        if (index == (int)text.length()){
        cout << "Invalid input \n";
        return 0;
    }
    }

    for (int i = index; i < (int)text.length(); i++){
        if (text[i] < '0' || text[i] > '9'){
            cout << "Invalid input\n";
            return 0;
        }

        number = number * 10 + (text[i] - '0');
    }

    number = number * sign;

    cout << "Converted int value : " << number ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Enter numeric string: 12243
// Converted int value : 12243
// PS E:\dddddddd\CPP_Que\07-Data_Conversion_16> cd "e:\dddddddd\CPP_Que\07-Data_Conversion_16\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Enter numeric string: df445
// Invalid input