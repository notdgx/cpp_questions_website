//10 :  Write a C++ program to split a large text file into smaller files of equal size.

#include <iostream>
#include <fstream>
using namespace std;

int main() {

    ifstream data("data.txt");
    ofstream file1("split1.txt");
    ofstream file2("split2.txt");
    ofstream file3("split3.txt");

    if (!data || !file1 || !file2 || !file3) {
        cout << "Files not opened";
        return 0;
    }

    cout << "Files opened\n";

    data.seekg(0, ios::end);
    int size = data.tellg();
    data.seekg(0, ios::beg);

    int f = size / 3;

    char a;
    int count = 0;

    while (data.get(a)) {
        if (count < f)
            file1 << a;
        else if (count < 2 * f)
            file2 << a;
        else
            file3 << a;

        count++;
    }

    cout << "File Splitted";
}



// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f10.cpp -o f10 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f10 }
// Files opened
// File Split Successfully