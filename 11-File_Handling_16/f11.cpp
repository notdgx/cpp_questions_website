// 11 :  Write a C++ program to search for a specific string in a text file and display its line number(s).

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

    string temp,search;
    cout << "Enter the sting to search : ";
    cin >> search;
    int a = 0;
    while (getline(file,temp))
    {
        a++;
      if (temp.find(search) != string::npos) {
        cout << "Word found , Line no : " << a << "\n";
    } 
    }

    file.close();
    return 1;

    

}

// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f11.cpp -o f11 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f11 }
// file opened 

// Enter the sting to search : Hell
// Word found , Line no : 1
// Word found , Line no : 2
// Word found , Line no : 4
// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f11.cpp -o f11 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f11 }
// file opened 

// Enter the sting to search : hgh