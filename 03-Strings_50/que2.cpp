// Que 2 : "Program to Swapping Pair of Characters"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;

    cout << "Enter a string: ";
    cin >> text;

    // a h k h d
    // 0 1 2 3 4 

    for (int i = 0; i + 1 < (int)text.length(); i += 2){
        char temp = text[i];
        text[i] = text[i + 1];
        text[i + 1] = temp;
    }

    cout << "After swapping pair of characters: " << text ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Enter a string: strings 
// After swapping pair of characters: tsirgns