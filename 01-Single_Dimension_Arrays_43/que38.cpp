// Que 38 : "Write a C++ program to segregate all 0s on left side and all 1s on right side of a given array of 0s and 1s"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    cout << "Enter " << n << " elements (only 0 and 1):\n";
    for (int i = 0; i < n; i++){
        cin >> arr[i];

        if (arr[i] != 0 && arr[i] != 1){
            cout << "Invalid input\n";
            return 0;
        }
    }

    int left = 0;
    int right = n - 1;

    while (left < right){
        while (left < right && arr[left] == 0){
            left++;
        }

        while (left < right && arr[right] == 1){
            right--;
        }

        if (left < right){
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    cout << "Array after segregation:\n";
    for (int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }

    cout << "\n";
    return 0;
}
