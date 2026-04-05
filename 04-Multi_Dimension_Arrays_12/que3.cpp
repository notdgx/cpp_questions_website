// Que 3 : "Program to Multiply Two Matrices"


#include <iostream>

using namespace std;


int main(){

    
    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int product[3][3]={0};


    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            product[i][j] = 0;

            for (int k = 0; k < 3; k++){
                product[i][j] += first[i][k] * second[k][j];
            }
        }
    }

    cout << "Product of matrixs is :\n";

    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            cout << product[i][j] << " ";
        }

        cout << "\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Product of matrixs is :
// 30 36 44
// 73 89 110
// 102 126 158