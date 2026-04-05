// Que 7 : "Program to print the elements of an array present on even position"


#include <iostream>

using namespace std;


int main(){


    int arr[] = {1,2 ,4,5,9};

    cout << "Array elements at even are :\n";
    for (int i = 1; i < 5; i+=2){
        cout << arr[i] << " ";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// Array elements at even are :
// 2 5