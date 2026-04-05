// Que 8 : "Write a C++ program to create a class called TrafficLight with color logic."


#include <iostream>
#include <string>

using namespace std;


class TrafficLight{

    private:
        string color;

    public:
        TrafficLight(string c){
            color = c;
        }

        void changeColor(string c){
            color = c;
        }

        void showAction(){
            if (color == "Red"){
                cout << "Stop\n";
            }

            else if (color == "Yellow"){
                cout << "Get Ready\n";
            }

            else if (color == "Green"){
                cout << "Go\n";
            }

            else{
                cout << "Invalid color\n";
            }
        }
};


int main(){

    TrafficLight light("Red");

    light.showAction();
    light.changeColor("Green");
    light.showAction();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// Stop
// Go