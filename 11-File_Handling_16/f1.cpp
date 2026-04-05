// 1 : Write a C++ program to create a new text file and write some text into it.

#include <iostream>
#include <fstream>
using namespace std;

int main(){

    ofstream file("data.txt");
    if (!file.is_open()){
        cout << "file not opened ";
        return 0;
    }
    else {
        cout << "file opened ";
    }


    file << "Hellllo \n"; 
    cout << "Data Entered ";
    file.close();
    return 1;
}

// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f1.cpp -o f1 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f1 }
// file opened Data Entered 