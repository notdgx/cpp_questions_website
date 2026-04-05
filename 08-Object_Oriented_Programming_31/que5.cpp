// Que 5 : "Write a C++ program to create a class called \"Book\" with methods to manage a collection."


#include <iostream>
#include <string>

using namespace std;


class Book{

private:
    string books[100];
    int count;

public:
    Book(){
        count = 0;
    }

    void addBook(string name){
        if (count < 100){
            books[count] = name;
            count++;
        }
    }

    void removeBook(string name){
        for (int i = 0; i < count; i++){
            if (books[i] == name){
                for (int j = i; j < count - 1; j++){
                    books[j] = books[j + 1];
                }
                count--;
                break;
            }
        }
    }

    void showBooks(){
        cout << "Book Collection:\n";
        for (int i = 0; i < count; i++){
            cout << books[i] << "\n";
        }
    }
};


int main(){

    Book collection;

    collection.addBook("C");
    collection.addBook("CPP");
    collection.addBook("AI");
    collection.addBook("CO");
    collection.addBook("CH");

    collection.showBooks();

    collection.removeBook("AI");

    cout << "\nAfter removing one book:\n";
    collection.showBooks();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }
// Book Collection:
// C
// CPP
// AI
// CO
// CH

// After removing one book:
// Book Collection:
// C
// CPP
// CO
// CH