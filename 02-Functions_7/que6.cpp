// Que 6 : "Write a C++ method that accepts three integers and checks whether they are consecutive or not. Returns true or false."


#include <iostream>

using namespace std;


bool areConsecutive(int a, int b, int c){

    if (b == a + 1 && c == b + 1){
        return true;
    }
    return false;
}


int main(){

    int a;
    int b;
    int c;

    cout << "Enter three integers: ";
    cin >> a >> b >> c;

    if (areConsecutive(a, b, c)){
        cout << "Yes ";
    }

    if (!areConsecutive(a, b, c)){
        cout << "Not consective ";
    }

    return 0;
}


// PS F:\dddddddd\CPP_Que\02-Functions_7> cd "f:\dddddddd\CPP_Que\02-Functions_7\" ; if ($?) { g++ que6.cpp -o que6 -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32 } ; if ($?) { .\que6 }
// Enter three integers: 3
// 4
// 5
// Yes 