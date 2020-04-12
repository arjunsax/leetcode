
var helper = function(root, h, max) {
    if (root == null) {
        return h;
    }
    h++;
    let children = root.children;
    if (children.length == 0) {
        return h;
    }
    
    for (var node of children) {
        let height = helper(node, h, max);
        if (height>max) max = height;
    }
    return max;
};
var maxDepth = function(root, h) {
    return helper(root, 0, 0);
};