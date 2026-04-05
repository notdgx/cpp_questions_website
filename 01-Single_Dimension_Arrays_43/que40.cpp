// Que 40 : "Write a C++ program to print all unique element in an array"


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

    cout << "Enter " << n << " elements:\n";
    for (int i = 0; i < n; i++){
        cin >> arr[i];
    }

    cout << "Unique elements are:\n";
    int hasUnique = 0;

    for (int i = 0; i < n; i++){
        int count = 0;

        for (int j = 0; j < n; j++){
            if (arr[i] == arr[j]){
                count++;
            }
        }

        if (count == 1){
            cout << arr[i] << " ";
            hasUnique = 1;
        }
    }

    if (hasUnique == 0){
        cout << "No unique elements";
    }

    cout << "\n";
    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que40.cpp -o que40 } ; if ($?) { .\que40 }
// Enter number of elements: 6
// Enter 6 elements:
// 4
// 4
// 5
// 7
// 7
// 8
// Unique elements are:
// 5 8