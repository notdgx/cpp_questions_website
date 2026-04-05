// Que 42 : "Write a C++ Program to Sort the Array in an Descending Order"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter " << i  + 1 << " element : ";
        cin >> arr[i];
    }

    for (int i = 0; i < n - 1; i++){
        for (int j = 0; j < n - i - 1; j++){
            if (arr[j] < arr[j + 1]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    cout << "Array in descending order:\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }

    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\que15 }
// Enter number of elements: 6
// Enter 1 element : 4
// Enter 2 element : 445
// Enter 3 element : 2
// Enter 4 element : 34
// Enter 5 element : 89
// Enter 6 element : 56655
// Array in descending order:
// 56655 445 89 34 4 2