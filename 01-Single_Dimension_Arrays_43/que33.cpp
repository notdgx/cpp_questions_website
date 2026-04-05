// Que 33 : "Write a C++ program to find the duplicate values of an array of integer values"


#include <iostream>

using namespace std;


int main(){

    int n,  uniqueCount = 0;
    int arr[100];
    int uniqueArr[100];


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

    for (int i = 0; i < n; i++){
        int isDuplicate = 0;

        for (int j = 0; j < uniqueCount; j++){
            if (arr[i] == uniqueArr[j]){
                isDuplicate = 1;
                break;
            }
        }

        if (isDuplicate == 0){
            uniqueArr[uniqueCount] = arr[i];
            uniqueCount++;
        }
    }

    cout << "Array after removing \n";
    for (int i = 0; i < uniqueCount; i++){
        cout << uniqueArr[i] << " ";
    }

    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que21.cpp -o que21 } ; if ($?) { .\que21 }
// Enter number of elements: 8
// Enter 1 element : 2
// Enter 2 element : 1
// Enter 3 element : 2
// Enter 4 element : 4
// Enter 5 element : 5
// Enter 6 element : 5
// Enter 7 element : 7
// Enter 8 element : 8
// Array after removing 
// 2 1 4 5 7 8