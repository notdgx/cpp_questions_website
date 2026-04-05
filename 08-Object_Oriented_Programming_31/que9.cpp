// Que 9 : "Write a C++ program to create an \"Employee\" class with years of service calculation."


#include <iostream>

using namespace std;


class Employee{

private:
    int joiningYear;
    int currentYear;

public:
    Employee(int join, int current){
        joiningYear = join;
        currentYear = current;
    }

    int yearsOfService(){
        return currentYear - joiningYear;
    }
};


int main(){

    int joiningYear;
    int currentYear;

    cout << "Enter joining year and current year : ";
    cin >> joiningYear >> currentYear;

    if (currentYear < joiningYear){
        cout << "Invalid years";
        return 0;
    }

    Employee emp(joiningYear, currentYear);

    cout << "Years of service: " << emp.yearsOfService() ;
    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_63\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Enter joining year and current year : 23
// 44
// Years of service: 21