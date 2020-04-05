var reverse = function(x) {
    var isPos = x>=0;
    x = Math.abs(x);
    let ans = parseInt((''+x).split('').reverse().join(''))
    ans = isPos ? ans : ans * -1;
    if (ans> 2147483647 || ans < -2147483648) return 0;
    return ans;
};