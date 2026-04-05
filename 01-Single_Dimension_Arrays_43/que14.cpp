// Que 14 : "Program to sort the elements of an array in ascending order"


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
            if (arr[j] > arr[j + 1]){
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    cout << "Array in asending order :\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }


    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\que14 }
// Enter number of elements: 6
// Enter 1 element : 3
// Enter 2 element : 4
// Enter 3 element : 78
// Enter 4 element : 90
// Enter 5 element : 4
// Enter 6 element : 56
// Array in asending order :
// 3 4 4 56 78 90