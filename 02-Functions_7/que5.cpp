// Que 5 : "Write a C++ method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative."


#include <iostream>

using namespace std;


int countDigitTwo(int number){

    int count = 0;

    if (number == 0){
        return 0;
    }

    while (number > 0){
        if (number % 10 == 2){
            count++;
        }

        number = number / 10;
    }
    return count;
}


int main(){

    int number;

    cout << "Enter a non-negative integer: ";
    cin >> number;
    cout << "Count of digit 2 is : " << countDigitTwo(number);
    return 0;
}


// PS F:\dddddddd\CPP_Que\02-Functions_7> cd "f:\dddddddd\CPP_Que\02-Functions_7\" ; if ($?) { g++ que5.cpp -o que5 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\que5 }
// Enter a non-negative integer: 23422
// Count of digit 2 is : 3