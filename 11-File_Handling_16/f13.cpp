// 13 : Write a C++ program to decrypt the contents of a text file encrypted using the above algorithm.

#include <iostream>
#include <fstream>
using namespace std;

int main() {


    ifstream decrypt("encrypted.txt");

     if (!decrypt.is_open()){
        cout << "File no opened ";
        return 0;
    }
    else {
        cout << "file opened ";
    }

    char a;
    while(decrypt.get(a)){
        cout << (char)(a-3) ;
    }

    cout << "\nEnd ";
    return 1;




}


// PS E:\dddddddd\CPP_Que\11-File_Handling_16> cd "e:\dddddddd\CPP_Que\11-File_Handling_16\" ; if ($?) { g++ f13.cpp -o f13 } ; if ($?) { .\f13 }
// file opened A well-structured paragraph serves as a foundational building block of writing, focusing on a single, cohesive idea. t typically begins with a clear topic sentence that introduces the main point, followed by supporting sentences that provide relevant details, evidence, or examples to develop that idea.To maintain flow and coherence, writers often use transition words to connect these sentences logically. Finally, a strong paragraph closes with a concluding sentence that summarizes the main point or bridges to the next topic. While often composed of three to five sentences, the length can vary depending on the depth of the topic and the writer's style.
// End