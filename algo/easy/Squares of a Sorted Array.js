/**
 * @param {number[]} A
 * @return {number[]}
 */
var helper = function(A) {
    let index = -1;
    let min = 10000;
    for (elem of A) {
        let absol = Math.abs(elem);
        if (absol <= min) {
            min = absol
            index++;
        }
        else return index;
    }
    return index;
};

var sortedSquares = function(A) {
    
    let start = helper(A);
    let ans = [Math.pow(A[start], 2)];
    let left = start - 1;
    let right = start + 1;
    while (left !== -1 || right < A.length) {
        if (A.length == right) {
            for (let i = left; i > -1; i--)
                ans.push(Math.pow(A[i], 2));
            break;
        }
        else if (left == -1) {
            for (let i = right; i < A.length; i++)
                ans.push(Math.pow(A[i], 2));
            break;
        }
        let lval = Math.pow(A[left], 2);
        let rval = Math.pow(A[right], 2);
        if (lval>rval) {
            right++;
            ans.push(rval);
        }
        else {
            left--;
            ans.push(lval);
        }
    }
    return ans;
};

console.log(sortedSquares([-1, 1]));