// Que 8 : "Program to print the elements of an array present on odd position"


#include <iostream>

using namespace std;


int main(){


    int arr[] = {1,2 ,4,5,9};

    cout << "Array elements at odd are :\n";
    for (int i = 0 ; i < 5; i+=2){
        cout << arr[i] << " ";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// Array elements at odd are :
// 1 4 9