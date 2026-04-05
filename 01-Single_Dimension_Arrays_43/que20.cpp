// Que 20 : "Program to Find Smallest Number in an array"



#include <iostream>

using namespace std;


int main(){


    int arr[] = {0,1,2,3,44,5,6,7,8,9};

    int smallest = arr[0];

    for (int i = 1; i < 10; i++){
        if (arr[i] < smallest){
            smallest = arr[i];
        }
    }

    cout << "smallest element is: " << smallest << "\n";
    return 0;
}

// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// smallest element is: 0