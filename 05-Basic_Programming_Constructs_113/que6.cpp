// Que 6 : "Write a C++ program to swap two variables"


#include <iostream>

using namespace std;


int main(){

    int first;
    int second;

    cout << "Enter two numbers: ";
    cin >> first >> second;

    int temp = first;
    first = second;
    second = temp;

    cout << "After swap \n first = " << first << " second = " << second ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113> cd "e:\dddddddd\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?)
//  { .\que6 }
// Enter two numbers: 4
// 5
// After swap 
//  first = 5 second = 4