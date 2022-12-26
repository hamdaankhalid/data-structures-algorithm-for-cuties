#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

int gethour(string s) {
   return stoi(s.substr(0, 2));
}

/**
AM remains AM
PM becomes an time+12
**/
string timeConversion(string s) {
    int hours = gethour(s);
    if (s.at(s.size() - 2) == 'A' && hours < 12) {
        return s.substr(0, s.size()-2);
    } else if (s.at(s.size() - 2) == 'A' && hours >= 12) {
        int resettime = hours % 12;
        string convtime = std::to_string(resettime);
        if (convtime.size() == 1) {
            convtime = '0' + convtime;
        }
        return convtime + s.substr(2, s.size()-4);
    } 
    
    int newtime = (hours % 12) + 12;
    return std::to_string(newtime) + s.substr(2, s.size()-4);
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = timeConversion(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
