// Que 11 : "Program to count the total number of punctuation characters exists in a String"


#include <iostream>
#include <string>

using namespace std;


bool isPunctuation(char ch){

    string marks = ".,;:!?'-\"()[]{}";

    for (int i = 0; i < marks.length() ; i++){
        if (ch == marks[i]){
            return true;
        }
    }

    return false;
}


int main(){

    string text;
    int count = 0;

    cout << "Enter a string : ";
    getline(cin, text);

    for (int i = 0; i < (int)text.length(); i++){
        if (isPunctuation(text[i])){
            count++;
        }
    }

    cout << "Total punctuation characters : " << count ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Enter a string : hello , world;';" 
// Total punctuation characters : 5