// Que 4 : "Write a C++ method to find all twin prime numbers less than 100."


#include <iostream>

using namespace std;


bool isPrime(int number){

    if (number < 2){
        return false;
    }

    for (int i = 2; i * i <= number; i++){
        if (number % i == 0){
            return false;
        }
    }

    return true;
}


void printTwinPrimes(){

    for (int i = 2; i < 100; i++){
        if (isPrime(i) && isPrime(i + 2) && i + 2 < 100){
            cout << "(" << i << ", " << i + 2 << ")\n";
        }
    }
}


int main(){

    cout << "Twin prime numbers less than 100 are:\n";
    printTwinPrimes();

    return 0;
}



// PS D:\dx\Coding\C++\CPP_Que\02-Functions_7> cd "d:\dx\Coding\C++\CPP_Que\02-Functions_7\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Twin prime numbers less than 100 are:
// (3, 5)
// (5, 7)
// (11, 13)
// (17, 19)
// (29, 31)
// (41, 43)
// (59, 61)
// (71, 73)