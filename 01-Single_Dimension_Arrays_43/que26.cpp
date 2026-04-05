// Que 26 : "Write a C++ program to find the index of an array element"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];
    int key;
    int foundIndex = -1;

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr[i];
    }

    cout << "Enter the element to search : ";
    cin >> key;

    for (int i = 0; i < n; i++){
        if (arr[i] == key){
            foundIndex = i;
            break;
        }
    }

    if (foundIndex != -1){
        cout << "Element found at index : " << foundIndex << "\n";
    }

    if (foundIndex == -1){
        cout << "Element not found \n";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que26.cpp -o que26 } ; if ($?) { .\que26 }
// Enter number of elements: 6
// Enter element no 1 : 45
// Enter element no 2 : 56
// Enter element no 3 : 5
// Enter element no 4 : 56
// Enter element no 5 : 65
// Enter element no 6 : 67
// Enter the element to search : 5
// Element found at index : 2