// Que 25 : "Write a C++ program to sum values of an array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];
    int sum = 0;


    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size \n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr[i];
        sum += arr[i];
    }

    cout << "Sum of array values is : " << sum << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que25.cpp -o que25 } ; if ($?) { .\que25 }
// Enter number of elements: 6
// Enter element no 1 : 4
// Enter element no 2 : 54
// Enter element no 3 : 54
// Enter element no 4 : 90
// Enter element no 5 : 54
// Enter element no 6 : 6
// Sum of array values is : 262
