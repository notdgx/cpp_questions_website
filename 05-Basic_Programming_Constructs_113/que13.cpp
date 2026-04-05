// Que 13 : "Write a C++ program to print the ascii value of a given character"


#include <iostream>

using namespace std;


int main(){

    char ch;

    cout << "Enter a character: ";
    cin >> ch;

    cout << "ASCII value is " << (int)ch ;
    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\que13 }
// Enter a character: A
// ASCII value is 65