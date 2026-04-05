// Que 16 : "Program to Find 3rd Largest Number in an array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];

    cout << "Enter number of elements: ";
    cin >> n;

    if (n < 3 || n > 100){
        cout << "Input at least 3 elements \n";
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

    cout << "3rd largest element is: " << arr[2] << "\n";
    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\que16 }
// Enter number of elements: 6
// Enter 1 element : 3
// Enter 2 element : 7
// Enter 3 element : 344
// Enter 4 element : 787
// Enter 5 element : 90
// Enter 6 element : 5
// 3rd largest element is: 90