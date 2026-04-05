// 2 : Write a C++ program to open an existing text file and display its contents on the console.

#include <iostream>
#include <fstream>
using namespace std;

int main(){

    ifstream file ("data.txt");
    if (!file.is_open()){
        cout << "file not opened ";
        return 0;
    }
    else {
        cout << "file opened \n\n";
    }

    char a;
    while (file.get(a))
    {
       cout << a;
    }

    file.close();
    return 1;
    

}

// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f2.cpp -o f2 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f2 }
// file opened 

// Hellllo
// Hellllo
// Hell
// Hell