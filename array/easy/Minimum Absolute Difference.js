var minimumAbsDifference = function(arr) {
    arr.sort((a,b) => a-b);
    let minDiff = 1000000;
    for(var i = 0; i<arr.length-1; i++) {
        if (arr[i+1]-arr[i] < minDiff) minDiff = arr[i+1]-arr[i];
    }
    let ans = [];
    for(var i = 0; i<arr.length-1; i++) {
        if (arr[i+1]-arr[i] == minDiff) ans.push([arr[i],arr[i+1]]);
    }
    return ans;
};

console.log(minimumAbsDifference([3,8,-10,23,19,-4,-14,27]));