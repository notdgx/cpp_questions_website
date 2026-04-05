// Que 18 : "Write a C++ program to create a Restaurant class with ratings."


#include <iostream>
#include <string>

using namespace std;


class Restaurant{

private:
    string name;
    int ratings[50];
    int count;

public:
    Restaurant(string n){
        name = n;
        count = 0;
    }

    void addRating(int rating){
        if (count < 50 && rating >= 1 && rating <= 5){
            ratings[count] = rating;
            count++;
        }
    }

    int averageRating(){
        if (count == 0){
            return 0;
        }

        int sum = 0;
        for (int i = 0; i < count; i++){
            sum += ratings[i];
        }

        return sum / count;
    }

    void show(){
        cout << "Restaurant: " << name << "\n";
        cout << "Average Rating: " << averageRating() << "\n";
    }
};


int main(){

    Restaurant r("Dominos");

    r.addRating(5);
    r.addRating(4);
    r.addRating(5);

    r.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que18v2.cpp -o que18v2 } ; if ($?) { .\que18v2 }
// Restaurant: Dominos
// Average Rating: 4