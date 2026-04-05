// Que 12 : "Write a C++ program to count the letters, spaces, numbers and other characters of an input string"


#include <iostream>
#include <string>

using namespace std;


int main(){

    string text;
    int letters = 0;
    int spaces = 0;
    int numbers = 0;
    int others = 0;

    cout << "Enter a string: ";
    getline(cin, text);

    for (int i = 0; i < text.length(); i++){
        char ch = text[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')){
            letters++;
        }

        else if (ch == ' '){
            spaces++;
        }

        else if (ch >= '0' && ch <= '9'){
            numbers++;
        }

        else{
            others++;
        }
    }

    cout << "Letters: " << letters << "\n";
    cout << "Spaces: " << spaces << "\n";
    cout << "Numbers: " << numbers << "\n";
    cout << "Other characters: " << others ;
    return 0;
}


// PS D:\tmp\CPP_Que\05-Basic_Programming_Constructs_113> cd "d:\tmp\CPP_Que\05-Basic_Programming_Constructs_113\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\que12 }
// Enter a string: hrllo434   jhvhfj j56;;'
// Letters: 12
// Spaces: 4
// Numbers: 5
// Other characters: 3