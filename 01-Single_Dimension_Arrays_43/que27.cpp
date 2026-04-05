// Que 27 : "Write a C++ program to calculate the average value of array elements"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];
    int sum = 0;

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr[i];
        sum += arr[i];
    }

    cout << "Average value is: " << sum / n << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que27.cpp -o que27 } ; if ($?) { .\que27 }
// Enter number of elements: 5
// Enter element no 1 : 3434
// Enter element no 2 : 34
// Enter element no 3 : 6
// Enter element no 4 : 86
// Enter element no 5 : 8
// Average value is: 713