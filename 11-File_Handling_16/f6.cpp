// 6 : Write a C++ program to find and replace a specific word in a text file.

#include <iostream>
#include <fstream>
using namespace std;

int main(){

    fstream file ("data.txt",ios::in | ios::out);
    if (!file.is_open()){
        cout << "file not opened ";
        return 0;
    }
    else {
        cout << "file opened \n\n";
    }

    string temp,word;
    cout << "Enter the word to search : ";
    cin >> temp;
    cout << "Enter the word to Replace : ";
    cin >> word;
    while (file >> temp)
    {

        if (temp == word){

            if (temp.length() == word.length()){
                file.seekg(-temp.length(),ios::cur);
                file << word;
                cout << "Word Replaced\n";
                break;
            }
            else {
                cout << "Word size not match\n";
                
            }

        }
    }

    cout << "Word Replaced ";
    file.close();
    return 1;
    

}