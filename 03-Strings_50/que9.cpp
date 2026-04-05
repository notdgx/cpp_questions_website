// Que 9 : "Program to count number of words in a String?"


#include <iostream>
#include <string>

using namespace std;


int countWords(string text){

    int words = 0;
    int inWord = 0;

    for (int i = 0; i < text.length(); i++){
        if (text[i] != ' ' && text[i] != '\t' && text[i] != '\n'){
            if (inWord == 0){
                words++;
                inWord = 1;
            }
        }

        if (text[i] == ' ' || text[i] == '\t' || text[i] == '\n'){
            inWord = 0;
        }
    }

    return words;
}


int main(){

    string text;

    cout << "Enter the string : ";
    getline(cin, text);

    cout << "Number of words : " << countWords(text) ;
    return 0;
}


// PS E:\dddddddd\CPP_Que> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Enter the string : hello worrld hello world hello world
// Number of words : 6