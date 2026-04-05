// Que 24 : "Write a C++ program to count the number of even and odd elements in a given array"


#include <iostream>

using namespace std;





int main(){

        int evenCount = 0;
    int oddCount = 0;
    int arr[10] = {1,2,3,4,4,4,4,9,9,999};


    for (int i = 0; i < 10; i++){
        if (arr[i] % 2 == 0){
            evenCount++;
        }
    }

    for (int i = 0; i < 10; i++){
        if (arr[i] % 2 != 0){
            oddCount++;
        }
    }


    cout << "Even elements count: " << evenCount << "\n";
    cout << "Odd elements count: " << oddCount << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que24.cpp -o que24 } ; if ($?) { .\que24 }
// Even elements count: 5
// Odd elements count: 5