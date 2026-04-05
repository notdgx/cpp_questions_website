// Que 5 : "Program to remove all occurrences of a given character from input String?"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    char ch;
    string result = "";

    cout << "Enter a string: ";
    cin >> text;

    cout << "Enter character to remove: ";
    cin >> ch;

    for (int i = 0; i < text.length(); i++){
        if (text[i] != ch){
            result += text[i];
        }
    }

    cout << "String after removal: " << result ;
    return 0;
}


PS E:\dddddddd\CPP_Que\03/