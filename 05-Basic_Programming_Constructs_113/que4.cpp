// Que 4 : "Write a C++ program to print the sum, multiply, subtract, divide and remainder of two numbers"


#include <iostream>

using namespace std;


int main(){

    int a;
    int b;

    cout << "Enter two numbers: ";
    cin >> a >> b;

    cout << "Sum: " << a + b << "\n";
    cout << "Multiply : " << a * b << "\n";
    cout << "Subtract: " << a - b << "\n";
    cout << "Divide : " << a / b << "\n";
    cout << "Remainder : " << a % b << "\n";
    return 0;
}


// PS E:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113> cd "e:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?)
//  { .\que4 }
// Enter two numbers: 4
// 2
// Sum: 6
// Multiply : 8
// Subtract: 2
// Divide : 2
// Remainder : 0