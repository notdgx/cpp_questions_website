// Que 30 : "Write a C++ program to insert an element (specific position) into an array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[101];
    int position;
    int value;

    cout << "Enter number of elements: ";
    cin >> n;

    if (n < 0 || n >= 101){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr[i];
    }

    cout << "Enter position (0 to " << n << "): ";
    cin >> position;

    if (position < 0 || position > n){
        cout << "Invalid position\n";
        return 0;
    }

    cout << "Enter value to insert : ";
    cin >> value;

    for (int i = n; i > position; i--){
        arr[i] = arr[i - 1];
    }

    arr[position] = value;
    n++;

    cout << "Array after insertion:\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }


    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que30.cpp -o que30 } ; if ($?) { .\que30 }
// Enter number of elements: 8
// Enter element no 1 : 3
// Enter element no 2 : 4
// Enter element no 3 : 5
// Enter element no 4 : 5
// Enter element no 5 : 6
// Enter element no 6 : 7
// Enter element no 7 : 3
// Enter element no 8 : 8
// Enter position (0 to 8): 6
// Enter value to insert : 666 
// Array after insertion:
// 3 4 5 5 6 7 666 3 8