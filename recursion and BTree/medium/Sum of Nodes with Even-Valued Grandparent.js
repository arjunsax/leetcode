var sum = 0;

var helper = function(arr) {
    for (elem of arr) {
        if (elem == null) {
            continue;
        }
        sum += elem.val;
    }
};
var recursive = function(root) {
    if (root == null) {
        return;
    }
    let left = root.left;
    let right = root.right;
    if (root.val %2 == 0) {
        let arr = [];
        if (left !== null) {
            arr.push(left.left);
            arr.push(left.right);
        }
        if (right !== null) {
            arr.push(right.left);
            arr.push(right.right);
        }
        helper(arr);
    }
    recursive(left);
    recursive(right);
}
var sumEvenGrandparent = function(root) {
    recursive(root);
    return sum;
};