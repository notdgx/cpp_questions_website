// Que 15 : "Write a C++ program to create a MusicLibrary class."


#include <iostream>
#include <string>

using namespace std;


class MusicLibrary{

private:
    string songs[100];
    int count;

public:
    MusicLibrary(){
        count = 0;
    }

    void addSong(string song){
        if (count < 100){
            songs[count] = song;
            count++;
        }
    }

    void removeSong(string song){
        for (int i = 0; i < count; i++){
            if (songs[i] == song){
                for (int j = i; j < count - 1; j++){
                    songs[j] = songs[j + 1];
                }

                count--;
                break;
            }
        }
    }

    void showSongs(){
        cout << "Songs in library:\n";
        for (int i = 0; i < count; i++){
            cout << songs[i] << "\n";
        }
    }
};


int main(){

    MusicLibrary m;

    m.addSong("Song 1");
    m.addSong("Song 2");
    m.addSong("Song 3");

    m.showSongs();

    m.removeSong("Song 1");

    cout << "\nAfter removing one song:\n";
    m.showSongs();

    return 0;
}


// PS E:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31> cd "e:\dddddddd\CPP_Que\08-Object_Oriented_Programming_31\" ; if ($?) { g++ que15.cpp -o que15 } ; if ($?) { .\que15 }
// Songs in library:
// Song 1
// Song 2
// Song 3

// After removing one song:
// Songs in library:
// Song 2
// Song 3