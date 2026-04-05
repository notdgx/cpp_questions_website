//7 : Write a C++ program to append new data to an existing text file.
#include <iostream>
#include <fstream>
using namespace std;

int main(){

    ofstream file ("data.txt",ios::app);
    if (!file.is_open()){
        cout << "file not opened ";
        return 0;
    }
    else {
        cout << "file opened \n\n";
    }

    string temp;
    cout << "Enter the data : ";
    getline(cin, temp);
    file << temp;
    cout << "Appeded";
    file.close();
    return 1;
    

}


// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f7.cpp -o f7 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f7 }
// file opened 

// Enter the data : Yooo Hii
// Appeded




// FILE 

// Hellllo 
// Hell llo
// aaa
// Hell
// YooooooYooo Hii