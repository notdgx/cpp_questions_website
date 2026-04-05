// Que 1 : "Program to Check Anagram"


#include <iostream>
#include <string>

using namespace std;


bool isAnagram(string first, string second){

    if (first.length() != second.length()){
        return false;
    }

    int freq[26] = {0};

    for (int i = 0; i < first.length(); i++){
        freq[first[i] - 'a']++;
        freq[second[i] - 'a']--;
    }

    for (int i = 0; i < 26; i++){
        if (freq[i] != 0){
            return false;
        }
    }

    return true;
}


int main(){

    string first;
    string second;

    cout << "Enter first string: ";
    cin >> first;

    cout << "Enter second string: ";
    cin >> second;

    if (isAnagram(first, second)){
        cout << "Anagram";
    }

    if (!isAnagram(first, second)){
        cout << "Not anagram";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Enter first string: listen
// Enter second string: silent
// Anagram