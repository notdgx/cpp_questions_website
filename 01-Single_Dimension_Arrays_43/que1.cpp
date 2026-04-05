// Que 1 : "Program to copy all elements of one array into another array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int source[100];
    int destination[100];

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter " << i  + 1 << " element : ";
        cin >> source[i];
    }

    for (int i = 0; i < n; i++){
        destination[i] = source[i];
    }

    cout << "Copied elements  :\n";
    for (int i = 0; i < n; i++){
        cout << destination[i] << " ";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que1.cpp -o que1 } ; if ($?) { .\que1 }
// Enter number of elements: 3
// Enter 1 element : 2
// Enter 2 element : 3
// Enter 3 element : 677
// Copied elements  :
// 2 3 677 