var helper = function(grid, x, y, total, maxX, maxY, mapSeen) {
    if (x < 0 || x >= maxX || y < 0 || y >= maxY) {return total};
    if (grid[x][y] == 0) return total;
    total += grid[x][y];
    mapSeen.add(x+" "+y);
    var up = 0;
    var down = 0;
    var left = 0;
    var right = 0;
    if (!mapSeen.has((x-1)+" "+y)) up = helper(grid, x-1, y, total, maxX, maxY, mapSeen);
    if (!mapSeen.has((x+1)+" "+y))  down = helper(grid, x+1, y, total, maxX, maxY, mapSeen);
    if (!mapSeen.has(x+" "+(y-1)))  left = helper(grid, x, y-1, total, maxX, maxY, mapSeen);
    if (!mapSeen.has(x+" "+(y+1)))  right = helper(grid, x, y+1, total, maxX, maxY, mapSeen);
    mapSeen.delete(x+" "+y);
    return Math.max(up, down, left, right);
}
var getMaximumGold = function(grid) {
    let max = 0;
    for (var i = 0; i< grid.length; i++) {
        for (var j = 0; j< grid[0].length; j++) {
            let mapSeen = new Set();
            let gold = helper(grid, i, j, 0, grid.length, grid[0].length, mapSeen);
            max = Math.max(max, gold);
        }
    }
    return max;
};

console.log(getMaximumGold([[0,6,0],[5,8,7],[0,9,0]]));