// Que 6 : "Program to print the elements of an array in reverse order"


#include <iostream>

using namespace std;


int main(){


    int arr[] = {1,2 ,4,5,9};

    cout << "Array elements in Reverse are  :\n";
    for (int i = 4; i >= 0 ; i--){
        cout << arr[i] << " ";
    }

    return 0;
}

// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\que6 }
// Array elements in Reverse are  :
// 9 5 4 2 1