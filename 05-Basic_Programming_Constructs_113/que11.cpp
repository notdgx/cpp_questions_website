// Que 11 : "Write a C++ program to compare two numbers"


#include <iostream>

using namespace std;


int main(){

    int first;
    int second;

    cout << "Enter two numbers: ";
    cin >> first >> second;

    if (first > second){
        cout << first << " is greater than " << second ;
    }

    if (first < second){
        cout << second << " is greater than " << first ;
    }

    if (first == second){
        cout << "Both numbers are equal";
    }

    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Enter two numbers: 5
// 6
// 6 is greater than 5