// Que 12 : "Program to determine whether a given matrix is a sparse matrix"


#include <iostream>

using namespace std;


int main(){

    int rows = 3;
    int cols = 3 ;
    int matrix[3][3]= {{0,2,0} , {0,0,0} , {7,0,0}};
    int zeroCount = 0;

    for (int i = 0; i < rows; i++){
        for (int j = 0; j < cols; j++){

            if (matrix[i][j] == 0){
                zeroCount++;
            }
        }
    }

    int totalElements = rows * cols;

    if (zeroCount > totalElements / 2){
        cout << "sparse matrix";
    }

    if (zeroCount <= totalElements / 2){
        cout << "not a sparse matrix";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que12.cpp -o que12 } ; if ($?) { .\que12 }
// sparse matrix