// Que 14 : "Write a C++ program that accepts an integer (n) and computes the value of n+nn+nnn"


#include <iostream>

using namespace std;


int main(){

    int n;

    cout << "Enter a number n: ";
    cin >> n;

    int nn = n * 10 + n;
    int nnn = n * 100 + nn;
    int result = n + nn + nnn;

    cout << "Value of n + nn + nnn is: " << result ;
    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que14.cpp -o que14 } ; if ($?) { .\que14 }
// Enter a number n: 5
// Value of n + nn + nnn is: 615