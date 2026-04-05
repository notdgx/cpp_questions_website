// Que 29 : "Write a C++ program to find the maximum and minimum value of an array"


#include <iostream>

using namespace std;


int main(){

    int arr[] = {0,1,2,3,44,5,6,7,8,9};

    int largest = arr[0];
    int smallest = arr[0];

    for (int i = 1; i < 10; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }

    cout << "smallest element is: " << smallest << "\n";
    

    cout << "Largest element is: " << largest << "\n";
    

}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que29.cpp -o que29 } ; if ($?) { .\que29 }
// smallest element is: 0
// Largest element is: 44