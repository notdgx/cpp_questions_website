// 9 : Write a C++ program to merge multiple text files into a single file.

#include <iostream>
#include <fstream>
using namespace std;

int main(){

    ifstream file1 ("data1.txt");
    ifstream file2 ("data2.txt");
    ifstream file3 ("data3.txt");
    ofstream merge ("merge.txt");

    if (!file1.is_open() || !file2.is_open() ||!file3.is_open() ||!merge.is_open()){
        cout << "files not opened ";
        return 0;
    }
    else {
        cout << "files opened \n\n";
    }

    char a;
    while (file1.get(a))
    {
        merge << a;
    }
    while (file2.get(a))
    {
        merge << a;
    }
    while (file3.get(a))
    {
        merge << a;
    }

    cout << "File Merged";
    return 1;



}

// PS F:\cpp\New folder\File Handeling> cd "f:\cpp\New folder\File Handeling\" ; if ($?) { g++ f9.cpp -o f9 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\f9 }
// files opened 

// File Merged


// merge.txt

// A well-structured paragraph serves as a foundational building block of writing, focusing on a single, cohesive idea. t typically begins with a clear topic sentence that introduces the main point, followed by supporting sentences that provide relevant details, evidence, or examples to develop that idea.To maintain flow and coherence, writers often use transition words to connect these sentences logically. Finally, a strong paragraph closes with a concluding sentence that summarizes the main point or bridges to the next topic. While often composed of three to five sentences, the length can vary depending on the depth of the topic and the writer's style.