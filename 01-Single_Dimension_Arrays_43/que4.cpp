// Que 4 : "Program to print the duplicate elements of an array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];
    int printed[100] = {0};

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

    int foundDuplicate = 0;

    cout << "Duplicate elements are :\n";
    for (int i = 0; i < n; i++){
        if (printed[i] == 1){
            continue;
        }

        int count = 1;
        for (int j = i + 1; j < n; j++){
            if (arr[i] == arr[j]){
                count++;
                printed[j] = 1;
            }
        }

        if (count > 1){
            cout << arr[i] << " ";
            foundDuplicate = 1;
        }
    }

    if (foundDuplicate == 0){
        cout << "No duplicate VAlues";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Enter number of elements: 8
// Enter 1 element : 1
// Enter 2 element : 2
// Enter 3 element : 3
// Enter 4 element : 4
// Enter 5 element : 4
// Enter 6 element : 4
// Enter 7 element : 5
// Enter 8 element : 5
// Duplicate elements are :
// 4 5