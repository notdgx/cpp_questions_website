// 5 : Write a C++ program to copy the contents of one text file to another.
#include <iostream>
#include <fstream>
using namespace std;

int main(){

    string path = "data.txt";
    ifstream file (path);
    if (!file.is_open()){
        cout << "file not opened ";
        return 0;
    }
    else {
        cout << "file opened \n\n";
    }
    ofstream copy("copyof_"+ path);
    if (!copy.is_open()){
        cout << "Copy file not opened ";
        return 0;
    }
    else {
        cout << "Copy file opened \n";
    }

    char a;
    while (file.get(a))
    {
        copy << a;
    }

    cout << "file Copied";
    file.close();
    return 1;
    

}

// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f5.cpp -o f5 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f5 }
// file opened 

// Copy file opened
// file Copied