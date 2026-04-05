// Que 11 : "Program to Transpose matrix"


#include <iostream>

using namespace std;


int main(){

    int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int transpose[3][3];


    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            transpose[j][i] = matrix[i][j];
        }
    }

    cout << "Transpose matrix is : \n";
    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            cout << transpose[i][j] << " ";
        }

        cout << "\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que11.cpp -o que11 } ; if ($?) { .\que11 }
// Transpose matrix is : 
// 1 4 7 
// 2 5 8 
// 3 7 9 