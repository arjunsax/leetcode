
var helper = function(children, arr) {
    if (children.length == 0) return;
    var nextChildren = new Array();
    var values = new Array();
    for (var val of children) {
        values.push(val.val);
        nextChildren = nextChildren.concat(val.children);
    }
    arr.push(values);
    helper(nextChildren, arr);
}
var levelOrder = function(root) {
    var ans = new Array();
    if (root == null) {
        return ans;
    }
    
    else helper([root], ans);
    return ans;
};

