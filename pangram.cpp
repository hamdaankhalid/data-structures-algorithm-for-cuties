#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

string pangrams(string s) {
    const std::string abcd = "abcdefghijklmnopqrstuvwxyz";
    std::unordered_set<char> abc;
    for (char c : abcd) {
        abc.insert(c);
    }
    
    for (auto i : s) {
        abc.erase(std::tolower(i));
    }
    
    return abc.size() == 0 ? "pangram" : "not pangram";
}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = pangrams(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
