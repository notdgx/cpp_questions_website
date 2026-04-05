// Que 3 : "Program to left rotate the elements of an array"


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

    int firstElement = arr[0];

    for (int i = 0; i < n - 1; i++){
        arr[i] = arr[i + 1];
    }

    arr[n - 1] = firstElement;

    cout << "Array after left rotation :\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }

    return 0;
}

// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Enter number of elements: 6
// Enter 1 element : 1
// Enter 2 element : 2
// Enter 3 element : 3
// Enter 4 element : 4
// Enter 5 element : 5
// Enter 6 element : 6
// Array after left rotation :
// 2 3 4 5 6 1