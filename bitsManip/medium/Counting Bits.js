var countBits = function(num) {
    let ans = new Array(num+1).fill(0);
    for (var i=1; i<=num; i*=2) {
        ans[i] = 1;
    }
    let largest2 = 1;
    for (i=2; i<=num; i++) {
        if (ans[i] == 0) {
            ans[i] = ans[i-largest2] + 1;
        }
        else largest2*=2;
    }
    return ans;
};