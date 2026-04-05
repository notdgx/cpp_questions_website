// Que 8 : "Program to find the frequency of odd & even numbers in the given matrix"


#include <iostream>

using namespace std;


int main(){

    int matrix[3][3]={{1,2,3} , {4,5,7} , {7,8,9}};

    int odd = 0,even = 0 ;



    for (int i = 0; i < 3; i++){
        for (int j = 0; j < 3; j++){
            if(matrix[i][j]%2 == 0){
                even++;
            } 
            else 
            odd++;
        }
    }

    cout << "No of Odd is : "<<odd <<endl;
    cout << "No of Even is : "<<even<<endl;


    return 0;
}

// PS E:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12> cd "e:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que8.cpp -o que8 } ; if ($?) { .\que8 }
// No of Odd is : 6
// No of Even is : 3