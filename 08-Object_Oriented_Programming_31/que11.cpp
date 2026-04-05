// Que 11 : "Write a C++ program to create a \"Library\" class to manage books."


#include <iostream>
#include <string>

using namespace std;


class Library{

private:
    string books[100];
    int count;

public:
    Library(){
        count = 0;
    }

    void addBook(string book){
        if (count < 100){
            books[count] = book;
            count++;
        }
    }

    void removeBook(string book){
        for (int i = 0; i < count; i++){
            if (books[i] == book){
                for (int j = i; j < count - 1; j++){
                    books[j] = books[j + 1];
                }

                count--;
                break;
            }
        }
    }

    void showBooks(){
        cout << "Books in library:\n";
        for (int i = 0; i < count; i++){
            cout << books[i] << "\n";
        }
    }
};


int main(){

    Library lib;

    lib.addBook("AI");
    lib.addBook("CPP");
    lib.addBook("co");

    lib.showBooks();

    lib.removeBook("AI");

    cout << "\nAfter removing one book:\n";
    lib.showBooks();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Books in library:
// AI
// CPP
// co

// After removing one book:
// Books in library:
// CPP
// co