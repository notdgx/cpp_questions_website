// Que 3 : "Program to Check if a String contains only digits?"


#include <iostream>
#include <string>

using namespace std;


bool onlyDigits(string text){

    if (text.length() == 0){
        return false;
    }

    for (int i = 0; i < text.length(); i++){
        if (text[i] < '0' || text[i] > '9'){
            return false;
        }
    }

    return true;
}


int main(){

    string text;

    cout << "Enter a string: ";
    cin >> text;

    if (onlyDigits(text)){
        cout << "Yes";
    }

    if (!onlyDigits(text)){
        cout << "No ";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\03-Strings_39> cd "e:\dddddddd\CPP_Que\03-Strings_39\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Enter a string: 44534332343
// Yes