// Que 7 : "Program to check whether a string is a Palindrome"


#include <iostream>
#include <string>

using namespace std;


// e e l l e e 
// 0 1 2 3 4 5 

bool isPalindrome(string text){

    int start = 0;
    int end = text.length() - 1;

    while (start < end){
        if (text[start] != text[end]){
            return false;
        }

        start++;
        end--;
    }

    return true;
}


int main(){

    string text;

    cout << "Enter a string : ";
    cin >> text;

    if (isPalindrome(text)){
        cout << "Palindrome ";
    }

    if (!isPalindrome(text)){
        cout << "Not palindrome";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que7.cpp -o que7 } ; if ($?) { .\que7 }
// Enter a string : ellelle
// Palindrome 