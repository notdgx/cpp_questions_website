// 3 : Write a C++ program to count the number of lines in a text file.

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

    int a = 0;
    string temp;
    while (getline(file,temp))
    {
       a++;
    }

    cout << "No of Lines : "<<a;
    file.close();
    return 1;
    

}


// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f3.cpp -o f3 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f3 }
// file opened 

// No of Lines : 4