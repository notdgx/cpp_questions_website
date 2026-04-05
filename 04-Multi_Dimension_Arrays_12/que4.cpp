// Que 4 : "Program to subtract the two matrices"

#include <iostream>

using namespace std;


int main(){

    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int diff[3][3]={0};


    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            diff[i][j] = first[i][j] - second[i][j];
        }
    }

    cout << "Difference of matrixs  is : \n";
    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            cout << diff[i][j] << " ";
        }

        cout << "\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que4.cpp -o que4 } ; if ($?) { .\que4 }
// Difference of matrixs  is : 
// 0 0 0
// 0 0 0
// 0 0 0