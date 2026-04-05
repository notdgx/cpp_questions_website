// Que 5 : "Write a C++ program that takes five numbers as input to calculate and print the average of the numbers"


#include <iostream>

using namespace std;


int main(){

    int a;
    int b;
    int c;
    int d;
    int e;

    cout << "Enter five numbers : ";

    cin >> a >> b >> c >> d >> e;

    int average = (a + b + c + d + e) / 5;

    cout << "Average is : " << average ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113> cd "e:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?)
//  { .\que5 }
// Enter five numbers : 5
// 5
// 5
// 5
// 5
// Average is : 5