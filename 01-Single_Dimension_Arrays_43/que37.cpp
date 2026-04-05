// Que 37 : "Write a C++ program to get the difference between the largest and smallest values in an array of integers"


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

cout << "Difference is " << largest-smallest << endl ;
    

}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que37.cpp -o que37 } ; if ($?) { .\que37 }
// Difference is 44
// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> 
