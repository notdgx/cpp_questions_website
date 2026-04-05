// Que 12 : "Program to print the sum of all the items of the array"


#include <iostream>

using namespace std;


int main(){


    int arr[] = {0,1,2,3,44,5,6,7,8,9};

    int sum=0;

    for (int i = 0; i < 10; i++){
        sum+=arr[i];
    }

    cout << "The Sum is: " << sum << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\que12 }
// The Sum is: 85