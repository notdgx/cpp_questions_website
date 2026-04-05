// Que 3 : "Write a C++ method to display the middle character of a string."


#include <iostream>
#include <string>

using namespace std;


char middleCharacter(string text){

    int length = text.length();
    int middleIndex = length / 2;
    return text[middleIndex];
}


int main(){

    string text;

    cout << "Enter a string: ";
    cin >> text;

    if (text.length() == 0){
        cout << "String is empty\n";
        return 0;
    }

    cout << "Middle character od: "<< text << " is " << middleCharacter(text) ;
    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\02-Functions_7> cd "d:\dx\Coding\C++\CPP_Que\02-Functions_7\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Enter a string: hello 
// Middle character od: hello is l