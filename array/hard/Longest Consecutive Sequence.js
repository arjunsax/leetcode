var longestConsecutive = function(nums) {
    let map = new Map();
    let ans = 0;
    let repeats = 0;
    let reads = 0
    for (val of nums) {
        reads++;
        console.log(val, map.get(val));
        if (map.get(val)) {
            repeats++;
            continue;
        }
        map.set(val, []);
        let lB = val;
        let uB = val;
        if (map.get(val+1)) {
            uB = map.get(val+1)[1];
        }
        if (map.get(val-1)) {
            lB = map.get(val-1)[0];
        }
        let range = [lB, uB];
        map.set(lB, range);
        map.set(uB, range);
        if (uB-lB+1>ans) {   
            ans = uB-lB+1;
            console.log(map.get(val+1));
            console.log(map.get(val-1));
            console.log(val, lB, uB)
        }
    }
    return ans;
};
let arr = require("./longestConsec");
console.log(longestConsecutive(arr));

// function popularNToys(numToys, topToys, toys, 
//     numQuotes, quotes)
// {
//     // WRITE YOUR CODE HERE
//     let toyCount = new Map();
//     if (numToys == 0 || numQuotes == 0) return [];
    
//     for (var val of toys) toyCount.set(val, 0);
//     for (var quote of quotes) {
//         let quoteArr = quote.split(" ");
//         let map = new Map();
//         for (var word of quoteArr) {
//         if (toyCount.get(word) !== undefined)
//             map.set(word, true);
//         }
//         for (word of map.entries()) {
//             let numOcc = toyCount.get(word[0]);
//             toyCount.set(word[0], numOcc+1);
//         }

//     }
//     let ansArr = [...toyCount.entries()].sort((a,b) => {
//         if (a[1]==b[1]) return b[0]<a[0];
//         else return b[1]-a[1];
//     });
//     let ans = new Array();
//     for (val of ansArr) {
//         if (topToys == 0) break;
//         if (val[1] !== 0) ans.push(val[0]);
//         topToys--;
//     }
//     console.log(ans);
//     return ans;

// }

// console.log(popularNToys(5, 2, ["a", "c", "b", "d", "e"], 3, ["b by a c", "b wor b c", "a b km c"]));