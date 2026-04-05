// Que 32 : "Write a C++ program to find the common elements between two arrays"


#include <iostream>

using namespace std;


int main(){

    int n1;
    int n2;
    int arr1[100];
    int arr2[100];
    int printed[100] = {0};

    cout << "Enter number of elements in first array: ";
    cin >> n1;

    cout << "Enter number of elements in second array: ";
    cin >> n2;

    if (n1 <= 0 || n1 > 100 || n2 <= 0 || n2 > 100){
        cout << "Invalid size\n";
        return 0;
    }

for (int i = 0; i < n1; i++){
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr1[i];
    }


for (int i = 0; i < n2; i++){
        cout << "Enter element no "<< i+1 << " : ";
        cin >> arr2[i];
    }


    cout << "Common elements are:\n";
    int hasCommon = 0;

    for (int i = 0; i < n1; i++){
        int alreadyPrinted = 0;
        for (int k = 0; k < i; k++){
            if (arr1[i] == arr1[k]){
                alreadyPrinted = 1;
                break;
            }
        }

        if (alreadyPrinted == 1){
            continue;
        }

        for (int j = 0; j < n2; j++){
            if (arr1[i] == arr2[j]){
                cout << arr1[i] << " ";
                hasCommon = 1;
                break;
            }
        }
    }

    if (hasCommon == 0){
        cout << "No common elements";
    }

    return 0;
}
