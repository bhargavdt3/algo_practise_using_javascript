// find the path exist in maze from S to E using recurssion

var maze = [
    ['-','-','-','-','-','*'],
    ['-','S','*','*','*','-'],
    ['-','-','-','*','E','*'],
    ['-','-','-','-','-','-'],
];

var visited = {};
function isPathAvailable(x,y) {

    if (x >= maze.length || x < 0 || y >= maze[0].length || y < 0) { return false }

    if (visited[`${x}${y}`] == 'V') {
        return false;
    } else {
        visited[`${x}${y}`] = 'V';
    }
    if (maze[x][y] === '*') { return false }
    if (maze[x][y] === 'E') { return true }

    return isPathAvailable(x+1, y) || isPathAvailable(x-1,y) || isPathAvailable(x, y+1) || isPathAvailable(x, y-1);  
}

console.log("check the path exits", isPathAvailable(1,1));