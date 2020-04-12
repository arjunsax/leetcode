
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
// Queue class 
class Queue 
{ 
	// Array is used to implement a Queue 
	constructor() 
	{ 
		this.items = []; 
	} 
				
    enqueue(element) 
    {	 
        // adding element to the queue 
        this.items.push(element); 
    } 
    dequeue() 
    { 
        // removing element from the queue 
        // returns underflow when called 
        // on empty queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    }
} 

let sum = 0;
var maxD = function(root, h=0) {
    if (root == null) {
        return h;
    }
    hLeft = maxD(root.left, h+1);
    hRight = maxD(root.right, h+1);
    return hLeft>hRight ? hLeft : hRight;
};
var sumify = function(root, h)  {
    if (root == null) {
        return;
    }
    if (h==1) {
        sum += root.val;
        return;
    }
    else {
        sumify(root.left, h-1);
        sumify(root.right, h-1);
    }
};
var deepestLeavesSum = function(root) {
    maxH = maxD(root);
    sumify(root, maxH);
    return sum;
};

let arr = [1];
let root = TreeNode(arr[0]);
let arr2 = new Queue();
arr2.enqueue(root);
for (var i = 1; i<arr.length; i+=2) {
    let node = arr2.dequeue();
    node.left = arr[i];
    node.right = arr[i+1];
    if (node.left) arr2.enqueue(node.left);
    if (node.right) arr2.enqueue(node.right);
}