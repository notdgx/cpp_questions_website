// Que 8 : "Define a class Time to represent time. Overload the << operator to display the time in HH:MM format."


#include <iostream>

using namespace std;


class Time{

private:
    int hour;
    int minute;

public:
    Time(int h = 0, int m = 0){
        hour = h;
        minute = m;
    }

    friend ostream& operator<<(ostream &out, Time t){
        if (t.hour < 10){
            out << "0";
        }

        out << t.hour << " : ";

        if (t.minute < 10){
            out << "0";
        }

        out << t.minute;
        return out;
    }
};


int main(){

    Time t1(9, 57);

    cout << "Time: " << t1 ;

    return 0;
}


// PS E:\dddddddd\CPP_Que\09-Operator_Overloading_8> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// Time: 09 : 57