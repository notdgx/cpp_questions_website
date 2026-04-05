// Que 12 : "Program to count the total number of vowels and consonants in a string"


#include <iostream>
#include <string>

using namespace std;


bool isVowel(char ch){

    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U'){
        return true;
    }

    return false;
}


int main(){

    string text;
    int vowels = 0;
    int consonants = 0;

    cout << "Enter a string : ";
    getline(cin, text);

    for (int i = 0; i < text.length(); i++){
            if (isVowel(text[i])){
                vowels++;
            }

            if (!isVowel(text[i])){
                consonants++;
            }
        
    }

    cout << "Vowels : " << vowels << "\n";
    cout << "Consonants : " << consonants ;



    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\que12 }
// Enter a string : hello workdl
// Vowels : 3
// Consonants : 9