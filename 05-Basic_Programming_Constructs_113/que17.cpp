// Que 17 : "Write a C++ program to print the even numbers from 1 to 20"


#include <iostream>

using namespace std;


int main(){

    cout << "Even numbers are : \n";
    for (int i = 1; i <= 20; i++){
        if (i % 2 == 0){
            cout << i << " ";
        }
    }

    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que17.cpp -o que17 } ; if ($?) { .\que17 }
// Even numbers are : 
// 2 4 6 8 10 12 14 16 18 20