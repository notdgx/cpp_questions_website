// Que 10 : "Write a C++ program to create an abstract class Instrument with abstract methods play() and tune(). Create derived classes Glockenspiel and Violin."


#include <iostream>

using namespace std;


class Instrument{

public:

    virtual void play() = 0;
    virtual void tune() = 0;
};


class Glockenspiel : public Instrument{

    public:

    void play(){
        cout << "Glockenspiel is playing \n";
    }

    void tune(){
        cout << "Glockenspiel tuned \n";
    }
};


class Violin : public Instrument{


    public:
    void play(){
        cout << "Violin is playing \n";
    }

    void tune(){
        cout << "Violin tuned\n";
    }
};


int main(){

    Glockenspiel g;
    Violin v;

    g.tune();
    g.play();

    v.tune();
    v.play();

    return 0;

}



// PS E:\dddddddd\CPP_Que\10-Virtual_Functions_13> cd "e:\dddddddd\CPP_Que\10-Virtual_Functions_13\" ; if ($?) { g++ que10.cpp -o que10 } ; if ($?) { .\que10 }
// Glockenspiel tuned 
// Glockenspiel is playing
// Violin tuned
// Violin is playing