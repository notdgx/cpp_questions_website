// Que 23 : "Write a C++ program to swap the first and last elements of an array and create a new array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];
    int newArr[100];

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter " << i  + 1 << " element : ";
        cin >> arr[i];
        newArr[i] = arr[i];
    }

    if (n > 1){
        int temp = newArr[0];
        newArr[0] = newArr[n - 1];
        newArr[n - 1] = temp;
    }

    cout << "New array after swappiing :\n";
    for (int i = 0; i < n; i++){
        cout << newArr[i] << " ";
    }

    cout << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que23.cpp -o que23 } ; if ($?) { .\que23 }
// Enter number of elements: 9
// Enter 1 element : 3333
// Enter 2 element : 4
// Enter 3 element : 4
// Enter 4 element : 6
// Enter 5 element : 8
// Enter 6 element : 3
// Enter 7 element : 24
// Enter 8 element : 4
// Enter 9 element : 9000
// New array after swappiing :
// 9000 4 4 6 8 3 24 4 3333