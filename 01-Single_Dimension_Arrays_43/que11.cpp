// Que 11 : "Program to print the number of elements present in an array"


#include <iostream>

using namespace std;



int main(){
    int arr[] = {1,2,3,4,5,6,7,8,9,0};

    int size = sizeof(arr) / sizeof(arr[0]);
    
    cout << "Number of elements in array is: " << size << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Number of elements in array is: 10