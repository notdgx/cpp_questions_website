// Que 6 : "Program to Add Characters to a String"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    string extra;

    cout << "Enter base string: ";
    cin >> text;

    cout << "Enter characters to add: ";
    cin >> extra;

    text += extra;

    cout << "Updated string: " << text ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\que6 }
// Enter base string: hello 
// Enter characters to add: ooooo
// Updated string: helloooooo