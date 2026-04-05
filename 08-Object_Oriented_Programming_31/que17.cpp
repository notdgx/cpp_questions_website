// Que 17 : "Write a C++ program to create a Movieclass with reviews."


#include <iostream>
#include <string>

using namespace std;


class Movie{

private:
    string title;
    string reviews[50];
    int count;

public:
    Movie(string t){
        title = t;
        count = 0;
    }

    void addReview(string review){
        if (count < 50){
            reviews[count] = review;
            count++;
        }
    }

    void showReviews(){
        cout << "Movie: " << title << "\n";
        cout << "Reviews:\n";
        for (int i = 0; i < count; i++){
            cout << reviews[i] << "\n";
        }
    }
};


int main(){

    Movie m("Interstellar");

    m.addReview("Good");
    m.addReview("Bad");
    m.addReview("Mid");

    m.showReviews();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que17.cpp -o que17 } ; if ($?) { .\que17 }
// Movie: Interstellar
// Reviews:
// Good
// Bad
// Mid