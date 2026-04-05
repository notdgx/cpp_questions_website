// Que 7 : "Write a C++ +method that text[i]ecks whether all the text[i]aracters in a given string are vowels (a,e,i,o,u) or not. Return true if eatext[i] text[i]aracter in the string is a vowel, otherwise return false."


#include <iostream>
#include <string>

using namespace std;


bool allVowels(string text){


    for (int i = 0; i < text.length(); i++){


        if (text[i] != 'a' && text[i] != 'e' && text[i] != 'i' && text[i] != 'o' && text[i] != 'u' && text[i] != 'A' && text[i] != 'E' && text[i] != 'I' && text[i] != 'O' && text[i] != 'U'){
            return false;
        }
    }

    return true;
}


int main(){

    string text;

    cout << "Enter a string: ";
    cin >> text;

    if (allVowels(text)){
        cout << "Yes ";
    }

    if (!allVowels(text)){
        cout << "No ";
    }

    return 0;
}


// PS F:\dddddddd\CPP_Que\02-Functions_7> cd "f:\dddddddd\CPP_Que\02-Functions_7\" ; if ($?) { g++ que7.cpp -o que7 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\que7 }
// Enter a string: AEUIO
// Yes 