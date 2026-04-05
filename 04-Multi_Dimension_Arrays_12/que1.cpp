// Que 1 : "Enter the Matrix of rows and columns entered by the user and print in matrix format"


#include <iostream>

using namespace std;


int main(){

    int rows;
    int cols;
    int matrix[20][20];

    cout << "Enter number of rows: ";
    cin >> rows;

    cout << "Enter number of columns: ";
    cin >> cols;

    if (rows <= 0 || cols <= 0 || rows > 20 || cols > 20){
        cout << "Invalid matrix size\n";
        return 0;
    }

    cout << "Enter matrix elements: "<<endl;
    for (int i = 0; i < rows; i++){
        for (int j = 0; j < cols; j++){
            cin >> matrix[i][j];
        }
    }

    cout << "Matrix is:"<<endl;
    for (int i = 0; i < rows; i++){
        for (int j = 0; j < cols; j++){
            cout << matrix[i][j] << " ";
        }

        cout << "\n";
    }

    return 0;
}


// PS F:\dddddddd\CPP_Que\02-Functions_7> cd "f:\dddddddd\CPP_Que\04-Multi_Dimension_Arrays_12\" ; if ($?) { g++ que1.cpp -o que1 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\que1 }
// Enter number of rows: 4
// Enter number of columns: 4
// Enter matrix elements: 
// 2

// 4
// 6
// 7
// 87
// 8
// 4
// 32
// 5
// 6
// 6
// 6
// 6
// 6
// 6
// 6
// Matrix is:
// 2 4 6 7 
// 87 8 4 32 
// 5 6 6 6 
// 6 6 6 6 