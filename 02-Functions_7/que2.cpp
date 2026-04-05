// Que 2 : "Write a C++ method to compute the average of three numbers."


#include <iostream>

using namespace std;


int averageOfThree(int a, int b, int c){

    int sum = a + b + c;
    int average = sum / 3;
    return average;
}


int main(){

    int a;
    int b;
    int c;

    cout << "Enter three numbers: ";
    cin >> a >> b >> c;

    cout << "Average is: " << averageOfThree(a, b, c) << "\n";
    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\02-Functions_7> cd "d:\dx\Coding\C++\CPP_Que\02-Functions_7\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Enter three numbers: 4
// 5
// 6
// Average is: 5