var longestPalindrome = function(s) {
    var length = s.length;
    if (length <= 1) return s;
    var dpArr = new Array(s.length).fill(new Array(s.length).fill(0));
    
    var pal = s[0];
    for (var i = 0; i<length; i++) {
        dpArr[i][i] = 1;
        for (var j = 0; j<i; j++) {
            if (i==j-1 && s[i] == s[j]) {
                dpArr[i][j] = 2;
                if (pal.length<2) pal = s.substring(j, i+1);
                continue;
            }
            
            if (s[i] == s[j] && dpArr[i-1][j+1] > 0) {
                console.log(i, j);
                let sub = s.substring(j, i+1);
                console.log(sub);
                if (pal.length<sub.length) pal = sub;
                dpArr[i][j] = 1;
            }
            else {
                dpArr[i][j] = 0;
            }
//            console.log(sub, i, j);
        }
    }
    return pal;
};

console.log(longestPalindrome("babad"));