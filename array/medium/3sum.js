var threeSum = function(nums) {
    const length = nums.length;
    nums.sort((a,b) => a-b);
    console.log(nums);
    if (length < 3 || nums[0] > 0 || nums[length-1]<0) {
        return [];
    }
    let ans = new Array();
    for (let i = 0; i<length-2; i++) {
        let j = i+1;
        let k = length-1;
        //console.log(i, j, k);
        if (i>0 && nums[i-1] == nums[i]) {
            continue;
        }
        while (j !== k) {
            let total = nums[j]+nums[k]+nums[i];
            if (total == 0) {
                ans.push([nums[i],nums[j],nums[k]]);
                
                k--;
                while (nums[k] == nums[k+1] && k>j) k--;
                if (k<=j) break;
                j++;
                while (nums[j] == nums[j-1] && k>j) j++;
            }
            else if (total<0) {
                j++;
                while (nums[j] == nums[j-1] && k>j) j++;
            }
            else {
                k--;
                while (nums[k] == nums[k+1] && k>j) k--;
            }
        }
    } 
    return ans;
    
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]