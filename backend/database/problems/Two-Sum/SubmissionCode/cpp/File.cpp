#include <bits/stdc++.h>
using namespace std;

INSERT_SOLVER

void setIO()
{
    cin.tie(0)->sync_with_stdio(0);
}

int main(int argc, char *argv[])
{
    setIO();
    string s;
    getline(cin, s);
    int target_sum = stoi(s);
    getline(cin, s);
    s = s.substr(1, s.size() - 2);
    string delimiter = ", ";
    int pos = 0;
    string token;
    vector<int> vec;
    while ((pos = s.find(delimiter)) != string::npos)
    {
        token = s.substr(0, pos);
        vec.push_back(stoi(token));
        s.erase(0, pos + delimiter.length());
    }
    vec.push_back(stoi(s));

    Solver solver;
    const auto ansVec = solver.twoSum(vec, target_sum);
    string ans = to_string(ansVec[0]) + " " + to_string(ansVec[1]);
    ofstream myfile;
    assert(argc == 2);
    myfile.open(argv[1]);
    assert(myfile.is_open());
    myfile << ans;
    myfile.close(); // not needed
}