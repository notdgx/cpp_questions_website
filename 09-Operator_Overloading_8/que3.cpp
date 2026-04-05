// Que 3 : "Define a class Matrix to represent matrices. Overload the * operator to multiply two matrices."


#include <iostream>

using namespace std;


class Matrix{

 private:
    int a[2][2];

public:

    void input(){
        cout << "Enter 2x2 matrix : \n";
        
        for (int i = 0; i < 2; i++){
            
            for (int j = 0; j < 2; j++){
                cout << "Enter element at ("<<i<<" , "<<j<<") : ";
                cin >> a[i][j];
            }

        }
    }

    // 2 2
    // 2 2
    
    // 4 4 
    // 4 4 

    Matrix operator*(Matrix other){
        Matrix temp;

        for (int i = 0; i < 2; i++){
            for (int j = 0; j < 2; j++){
                temp.a[i][j] = 0;

                for (int k = 0; k < 2; k++){
                    temp.a[i][j] += a[i][k] * other.a[k][j];
                }
            }
        }

        return temp;
    }

    void show(){
        for (int i = 0; i < 2; i++){
            for (int j = 0; j < 2; j++){
                cout << a[i][j] << " ";
            }

            cout << "\n";
        }
    }
};


int main(){

    Matrix m1;
    Matrix m2;

    m1.input();
    m2.input();

    Matrix m3 = m1 * m2;

    cout << "Result matrix :";
    m3.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\09-Operator_Overloading_8> cd "e:\dddddddd\CPP_Que\09-Operator_Overloading_8\" ; if ($?) { g++ que3.cpp -o que3 } ; if ($?) { .\que3 }
// Enter 2x2 matrix : 
// Enter element at (0 , 0) : 2
// Enter element at (0 , 1) : 2
// Enter element at (1 , 0) : 2
// Enter element at (1 , 1) : 2
// Enter 2x2 matrix : 
// Enter element at (0 , 0) : 4
// Enter element at (0 , 1) : 4
// Enter element at (1 , 0) : 4
// Enter element at (1 , 1) : 4
// Result matrix :16 16 
// 16 16