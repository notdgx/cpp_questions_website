// Que 19 : "Write a C++ program for booking flights and hotels."


#include <iostream>
#include <string>

using namespace std;


class BookingSystem{

private:
    string customerName;
    string flight;
    string hotel;

public:
    BookingSystem(string name){
        customerName = name;
        flight = "Not Booked";
        hotel = "Not Booked";
    }

    void bookFlight(string flightName){
        flight = flightName;
    }

    void bookHotel(string hotelName){
        hotel = hotelName;
    }

    void showBooking(){
        cout << "Customer: " << customerName << "\n";
        cout << "Flight: " << flight << "\n";
        cout << "Hotel: " << hotel << "\n";
    }
};


int main(){

    BookingSystem b("Rohit");

    b.showBooking();
    b.bookFlight("Delhi to Mumbai");
    b.bookHotel("Sea View Hotel");

    b.showBooking();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que19.cpp -o que19 } ; if ($?) { .\que19 }
// Customer: Rohit
// Flight: Not Booked
// Hotel: Not Booked
// Customer: Rohit
// Flight: Delhi to Mumbai
// Hotel: Sea View Hotel