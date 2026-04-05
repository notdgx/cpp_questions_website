// Que 16 : "Write a C++ program to print the odd numbers from 1 to 20"


#include <iostream>

using namespace std;


int main(){

    cout << "Odd numbers are : \n";
    for (int i = 1; i <= 20; i++){
        if (i % 2 != 0){
            cout << i << " ";
        }
    }

    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que16.cpp -o que16 } ; if ($?) { .\que16 }
// Odd numbers are : 
// 1 3 5 7 9 11 13 15 17 19