

var uniqueOccurrences = function(arr) {
    let map = new Map();
    for (var val of arr) {
        let occur = map.get(val);
        if (occur)
            map.set(val, occur+1);
        else
            map.set(val, 1);
    }
    let occurMap = new Map();
    for (val of map.entries()) {
        let occur = occurMap.get(val[1]);
        if (occur)
            return false;
        else
            occurMap.set(val[1], true);
    }
    return true;
};

console.log(uniqueOccurrences([1,2,1,1,3]));
console.log(uniqueOccurrences([1,2,2,1,1,3]));