// Que 5 : "Define a class Date to represent dates. Overload the < operator to compare two dates."


#include <iostream>

using namespace std;


class Date{

    private:

        int day;
        int month;
        int year;

    public: 


    Date(int d = 1, int m = 1, int y = 2000){
        day = d;
        month = m;
        year = y;
    }

    bool operator<(Date other){
        if (year != other.year){
            return year < other.year;
        }

        if (month != other.month){
            return month < other.month;
        }

        return day < other.day;
    }

};


int main(){

    Date d1(10,5,2024);
    Date d2(15,8,2024);

    if (d1 < d2){
        cout << "d1 is before d2";
    }

    else{
        cout << "d1 is after d2\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\09-Operator_Overloading_8> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }
// d1 is before d2