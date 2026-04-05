// Que 6 : "Program to display the lower triangular matrix"


#include <iostream>

using namespace std;


int main(){

    int matrix[3][3] = {{1,2,3} , {4,5,7} , {7,8,9}};


    // 00 01 02
    // 10 11 12
    // 20 21 22

    cout << "Lower triangular matrix : \n";

    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            if (j <= i){
                cout << matrix[i][j] << " ";
            }

            if (j > i){
                cout << " ";
            }
        }

        cout << "\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que6.cpp -o que6 } ; if ($?) { .\que6 }
// Lower triangular matrix : 
// 1
// 4 5
// 7 8 9