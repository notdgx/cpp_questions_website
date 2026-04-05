// Que 31 : "Write a C++ program to reverse an array of integer values"


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
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr[i];
    }

    int start = 0;
    int end = n - 1;

    while (start < end){
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }

    cout << "Reversed array isn  :\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }


    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que31.cpp -o que31 } ; if ($?) { .\que31 }
// Enter number of elements: 6
// Enter element no 1 : 12
// Enter element no 2 : 34
// Enter element no 3 : 45
// Enter element no 4 : 67
// Enter element no 5 : 54
// Enter element no 6 : 67
// Reversed array isn  :
// 67 54 67 45 34 12