// Que 10 : "Program to determine whether a given matrix is an identity matrix"


#include <iostream>

using namespace std;


int main(){

    int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    bool isIdentity = true;
    

    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            if (i == j && matrix[i][j] != 1){
                isIdentity = 0;
            }

            if (i != j && matrix[i][j] != 0){
                isIdentity = 0;
            }
        }
    }

    if (isIdentity == true){
        cout << "identity matrix";
    }

    if (isIdentity == false){
        cout << "not identity matrix";
    }

    return 0;
}


// PS E:\dddddddd\CPP_Que> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que10v2.cpp -o que10v2 } ; if ($?) { .\que10v2 }
// not identity matrix