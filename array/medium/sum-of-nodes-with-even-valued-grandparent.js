var gp = function(root, par, gpar) {
    if (root == null) return 0;
    let sum = 0;
    if (gpar !== null && gpar.val % 2 == 0) {
        sum += root.val;
    }
    return (gp(root.left, root, par) + gp(root.right, root, par))+sum;
};

var sumEvenGrandparent = function(root) {
    return gp(root, null, null)
};