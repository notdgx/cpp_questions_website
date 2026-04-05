// Que 4 : "Program to perform Deep Copy for String?"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string original;
    string copied = "";

    cout << "Enter a string: ";
    cin >> original;

    for (int i = 0; i < original.length(); i++){
        copied += original[i];
    }

    cout << "Original string: " << original << "\n";
    cout << "Copied string: " << copied ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Enter a string: helllo
// Original string: helllo
// Copied string: helllo