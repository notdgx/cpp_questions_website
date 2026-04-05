// Que 5 : "Program to determine whether two matrices are equal"


#include <iostream>

using namespace std;


int main(){

    int first[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int second[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};
    int n = 0;


    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            if (first[i][j] == second[i][j]){
                n++;
            }

        }
    }

    if (n == 9){
    cout << "Equal ";
    
}

else {
        cout << "Not Equal ";
        

    }
    

    return 0;
}


// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que5.cpp -o que5 } ; if ($?) { .\que5 }
// Equal 