//12 : Write a C++ program to encrypt the contents of a text file using a simple encryption algorithm.

#include <iostream>
#include <fstream>
using namespace std;

int main() {

    ifstream data("data.txt",ios::in);
    ofstream encrypt("encrypted.txt",ios::out);


    if (!data.is_open() || !encrypt.is_open()){
        cout << "File no opened ";
        return 0;
    }

    else {
        cout << "File Opened ";
    }
   
    char a;
    
    while (data.get(a)){
        encrypt << (char)(a+3);
    }
    cout << "Data Added \n";

    // cout << "Decrypting Data \n";

    // data.close();
    // encrypt.close();

    // ifstream decrypt("encrypted.txt");
    // while(decrypt.get(a)){
    //     cout << (char)(a-3) ;
    // }

    // cout << "\nEnd ";





}


// PS E:\dddddddd\CPP_Que\11-File_Handling_16> cd "e:\dddddddd\CPP_Que\11-File_Handling_16\" ; if ($?) { g++ f12.cpp -o f12 } ; if ($?) { .\f12 }
// File Opened Data Added 

// ENCRYPTED FIEL 

// D#zhoo0vwuxfwxuhg#sdudjudsk#vhuyhv#dv#d#irxqgdwlrqdo#exloglqj#eorfn#ri#zulwlqj/#irfxvlqj#rq#d#vlqjoh/#frkhvlyh#lghd1#w#w|slfdoo|#ehjlqv#zlwk#d#fohdu#wrslf#vhqwhqfh#wkdw#lqwurgxfhv#wkh#pdlq#srlqw/#iroorzhg#e|#vxssruwlqj#vhqwhqfhv#wkdw#surylgh#uhohydqw#ghwdlov/#hylghqfh/#ru#h{dpsohv#wr#ghyhors#wkdw#lghd1Wr#pdlqwdlq#iorz#dqg#frkhuhqfh/#zulwhuv#riwhq#xvh#wudqvlwlrq#zrugv#wr#frqqhfw#wkhvh#vhqwhqfhv#orjlfdoo|1#Ilqdoo|/#d#vwurqj#sdudjudsk#forvhv#zlwk#d#frqfoxglqj#vhqwhqfh#wkdw#vxppdul}hv#wkh#pdlq#srlqw#ru#eulgjhv#wr#wkh#qh{w#wrslf1#Zkloh#riwhq#frpsrvhg#ri#wkuhh#wr#ilyh#vhqwhqfhv/#wkh#ohqjwk#fdq#ydu|#ghshqglqj#rq#wkh#ghswk#ri#wkh#wrslf#dqg#wkh#zulwhu*v#vw|oh1