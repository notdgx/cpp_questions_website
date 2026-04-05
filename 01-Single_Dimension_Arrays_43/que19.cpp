// Que 19 : "C++ Program Find 2nd Smallest Number in an array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];

    cout << "Enter number of elements: ";
    cin >> n;

    if (n < 2 || n > 100){
        cout << "Need at least 2 elements\n";
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

    cout << "2nd smallest element is: " << arr[1] << "\n";
    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que19.cpp -o que19 } ; if ($?) { .\que19 }
// Enter number of elements: 5
// Enter 1 element : 343
// Enter 2 element : 56
// Enter 3 element : 9
// Enter 4 element : 0
// Enter 5 element : 45
// 2nd smallest element is: 9