// Que 9 : "Program to find the sum of each row and each column of a matrix"


#include <iostream>

using namespace std;


int main(){

        int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};


    cout << "Sum of each row:\n";
    for (int i = 0; i < 3 ; i++){
        int rowSum = 0;

        for (int j = 0; j < 3 ; j++){
            rowSum += matrix[i][j];
        }

        cout << "Row " << i + 1 << " sum :  " << rowSum << "\n";
    }

    cout << "Sum of each column:\n";
    for (int j = 0; j < 3 ; j++){
        int colSum = 0;

        for (int i = 0; i < 3 ; i++){
            colSum += matrix[i][j];
        }

        cout << "Column " << j + 1 << " sum : " << colSum << "\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que9.cpp -o que9 } ; if ($?) { .\que9 }
// Sum of each row:
// Row 1 sum :  6
// Row 2 sum :  16
// Row 3 sum :  24
// Sum of each column:
// Column 1 sum : 12
// Column 2 sum : 15
// Column 3 sum : 19