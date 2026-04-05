// Que 13 : "Write a C++ program to create Inventory class for product tracking."


#include <iostream>
#include <string>

using namespace std;


class Inventory{

private:
    string productName;
    int quantity;

public:
    Inventory(string name, int qty){
        productName = name;
        quantity = qty;
    }

    void addStock(int qty){
        quantity += qty;
    }

    void sellStock(int qty){
        if (qty > quantity){
            cout << "Not enough stock\n";
        }

        else{
            quantity -= qty;
        }
    }

    void show(){
        cout << "Product: " << productName << ", Quantity: " << quantity << "\n";
    }
};


int main(){

    Inventory inv("Laptop", 10);

    inv.show();
    inv.addStock(5);
    inv.sellStock(8);
    inv.show();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que13.cpp -o que13 } ; if ($?) { .\que13 }
// Product: Laptop, Quantity: 10
// Product: Laptop, Quantity: 7