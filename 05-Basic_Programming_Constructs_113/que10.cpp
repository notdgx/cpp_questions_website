// Que 10 : "Write a C++ program and compute the sum of the digits of an integer"


#include <iostream>

using namespace std;


int main(){

    int number;
    int sum = 0;

    cout << "Enter an integer: ";
    cin >> number;
    while (number > 0){
        sum += number % 10;
        number = number / 10;
    }

    cout << "Sum of digits: " << sum ;
    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// Enter an integer: 4444
// Sum of digits: 16