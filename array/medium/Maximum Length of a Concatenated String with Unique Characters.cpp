class Solution {
public:
    int help(vector<string>& arr, int ans, set<char> &S, int n = 0) {
        if(n>= arr.size()) return ans;
        if (arr[n] == "A") return help(arr, ans, S, n+1);
        for (auto c: arr[n]) {
            if (S.find(c) != S.end()) return help(arr, ans, S, n+1);
        }
        
        int nUsed = help(arr, ans, S, n+1);
        for (auto c: arr[n]) {
            S.insert(c);
        }
        int used = help(arr, ans+arr[n].size(), S, n+1);
        for (auto c: arr[n]) {
            S.erase(c);
        }
        return max(nUsed, used);
    }
    int maxLength(vector<string>& arr) {
        int i = 0;
        for (auto st: arr) {
            set<char> S;
            for (auto c: st) {
                if (S.find(c) != S.end()) {
                    arr[i] = "A";
                    break;
                }
                else S.insert(c);
            } 
            i++;
        }
        set<char> S;
        return help(arr, 0, S);
    }
};