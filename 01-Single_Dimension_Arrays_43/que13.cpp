// Que 13 : "Program to right rotate the elements of an array"


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

    int lastElement = arr[n - 1];

    for (int i = n - 1; i > 0; i--){
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement;

    cout << "Array after right rotation:\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\que13 }
// Enter number of elements: 6
// Enter 1 element : 1
// Enter 2 element : 2
// Enter 3 element : 3
// Enter 4 element : 4
// Enter 5 element : 4
// Enter 6 element : 5
// Array after right rotation:
// 5 1 2 3 4 4