// Que 10 : "Program to count the total number of characters in a string"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;

    cout << "Enter a string : ";
    getline(cin, text);

    cout << "Total characters : " << text.length() ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// Enter a string : hello world 
// Total characters : 12