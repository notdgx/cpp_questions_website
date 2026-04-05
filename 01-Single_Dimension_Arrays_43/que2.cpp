// Que 2 : "Program to find the frequency of each element in the array"


#include <iostream>

using namespace std;


int main(){

    int n;
    int arr[100];
    int visited[100] = {0};

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0 || n > 100){
        cout << "Invalid size\n";
        return 0;
    }

    for (int i = 0; i < n; i++){
        cout << "Enter " << i  + 1 << " element : ";
        cin >> arr[i];
    }

    cout << "Frequency of each element:\n";
    for (int i = 0; i < n; i++){
        if (visited[i] == 1){
            continue;
        }

        int count = 1;

        for (int j = i + 1; j < n; j++){
            if (arr[i] == arr[j]){
                count++;
                visited[j] = 1;
            }
        }

        cout << arr[i] << " -> " << count << "\n";
    }

    return 0;
}


// PS D:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43> cd "d:\dx\Coding\C++\CPP_Que\01-Single_Dimension_Arrays_43\" ; if ($?) { g++ que2.cpp -o que2 } ; if ($?) { .\que2 }
// Enter number of elements: 5
// Enter 1 element : 1
// Enter 2 element : 2
// Enter 3 element : 2
// Enter 4 element : 4
// Enter 5 element : 4
// Frequency of each element:
// 1 -> 1
// 2 -> 2
// 4 -> 2
