// Que 1 : "Write a C++ method to find the smallest number among three numbers."


#include <iostream>

using namespace std;


int smallestNumber(int a, int b, int c){

    int smallest = a;

    if (b < smallest){
        smallest = b;
    }

    if (c < smallest){
        smallest = c;
    }

    return smallest;
}


int main(){

    int a;
    int b;
    int c;

    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    cout << "Smallest number is: " << smallestNumber(a, b, c) << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\02-Functions_7\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }

// Enter three numbers: 3
// 6
// 8
// Smallest number is: 3