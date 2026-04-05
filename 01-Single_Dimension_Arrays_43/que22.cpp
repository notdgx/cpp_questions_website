// Que 22 : "Program to Print Odd and Even Numbers from an array"


#include <iostream>

using namespace std;


int main(){

    int arr[10] = {1,2,3,4,4,4,4,9,9,999};

    cout << "Even numbers are:\n";
    for (int i = 0; i < 10; i++){
        if (arr[i] % 2 == 0){
            cout << arr[i] << " ";
        }
    }

    cout << "\nOdd numbers are:\n";
    for (int i = 0; i < 10; i++){
        if (arr[i] % 2 != 0){
            cout << arr[i] << " ";
        }
    }

    cout << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que22.cpp -o que22 } ; if ($?) { .\que22 }
// Even numbers are:
// 2 4 4 4 4
// Odd numbers are:
// 1 3 9 9 999