// Que 12 : "Write a C++ program to create an Airplane class with flight tracking."


#include <iostream>
#include <string>

using namespace std;


class Airplane{

private:
    string flightNo;
    string status;

public:
    Airplane(string no, string st){
        flightNo = no;
        status = st;
    }

    void updateStatus(string st){
        status = st;
    }

    void printStatus(){
        cout << "Flight " << flightNo << " status: " << status << "\n";
    }
};


int main(){

    Airplane plane("AI202", "On Time");

    plane.printStatus();
    plane.updateStatus("Delayed");
    plane.printStatus();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\que12 }
// Flight AI202 status: On Time
// Flight AI202 status: Delayed