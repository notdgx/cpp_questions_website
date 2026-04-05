// 14 : Write a C++ program to read a CSV file and display its contents in tabular form.

#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <iomanip>

using namespace std;


int main(){

    ifstream file("data.csv",ios::in);

    string line , cell;

    while (getline(file,line)){
        
        stringstream ss(line);
        while (getline(ss,cell,',')){
            cout << left << std::setw(10) << cell ;
        }
        cout << "\n";
        
    }


    return 0 ;
}



// PS E:\dddddddd\CPP_Que\11-File_Handling_16> cd "e:\dddddddd\CPP_Que\11-File_Handling_16\" ; if ($?) { g++ f14.cpp -o f14 } ; if ($?) { .\f14 }
// ID        Name      Class     Maths     Science   English   Computer  Total     Average   Grade     Status    
// 101       Aman      12A       78        82        75        80        315       78.75     B         Pass      
// 102       Simran    12A       88        79        82        86        335       83.75     A         Pass
// 103       Rahul     12B       65        70        68        72        275       68.75     C         Pass      
// 104       Priya     12B       92        91        89        95        367       91.75     A+        Pass      