// Que 9 : "Program to print the largest element in an array"


#include <iostream>

using namespace std;


int main(){


    int arr[] = {0,1,2,3,44,5,6,7,8,9};

    int largest = arr[0];

    for (int i = 1; i < 10; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }

    cout << "Largest element is: " << largest << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Largest element is: 44