// kofta never looses
#include <iostream>
#include <ctime>
using namespace std;
int main(){
    int i,j;
    srand((unsigned)time(NULL));

        for(i=0; i<1; i++){
            j=rand()%90 + 10;
            cout << j << endl;
        }
        system('pause');
        return 0;
}