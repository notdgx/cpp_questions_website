// Que 5 : "Program to print the elements of an array"


#include <iostream>

using namespace std;


int main(){


    int arr[] = {1,2 ,4,5,9};

    cout << "Array elements are :\n";
    for (int i = 0; i < 5; i++){
        cout << arr[i] << " ";
    }

    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }
// Array elements are :
// 1 2 4 5 9