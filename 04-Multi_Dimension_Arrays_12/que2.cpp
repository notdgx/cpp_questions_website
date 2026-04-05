// Que 2 : "Program to Add Two Matrices"


#include <iostream>

using namespace std;


int main(){

    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int sum[3][3]={0};


    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            sum[i][j] = first[i][j] + second[i][j];
        }
    }

    cout << "Sum of matrixs  is : \n";
    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            cout << sum[i][j] << " ";
        }

        cout << "\n";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Sum of matrixs  is : 
// 2 4 6
// 8 10 14
// 14 16 18