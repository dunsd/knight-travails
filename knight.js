const Node = (row, col, distFromStart, prevNode = null) => {

    function getString(){
        return `${this.row} ${this.col}`;
    }
    return{
        row:row,
        col:col,
        distFromStart:distFromStart,
        getString,
    };
};

//Return array of potential moves of a knight
const getMoves = (row, col) => {
    return [[row-2,col-1], [row-2,col+1], [row-1,col+2],[row-1,col-2], [row+1,col+2], [row+1,col-2],[row+2,col-1],[row+2,col+1]];
}

const knightMoves = (src, dst) => {
    if(src[0] > 7 || src[0] < 0 || src[1] > 7 || src[1] < 0 || 
        dst[0] > 7 || dst[0] < 0 || dst[1] > 7 || dst[1] < 0) {
        console.log("Please use a valid tile between [0,0] and [7,7]");
        return;
    }
    const queue = [];
    const startPos = Node(src[0], src[1], 0);
    queue.push(startPos);
    const visited = new Set();

    while(queue.length > 0) {
        const currentNode = queue.shift();

        if(currentNode.row === dst[0] && currentNode.col === dst[1]) { //exit case
            let path = [`[${currentNode.row}, ${currentNode.col}]`];
            const shortestDist = currentNode.distFromStart;
            
            while(currentNode.prevNode != null){
            let nextAns = `[${currentNode.prevNode.row}, ${currentNode.prevNode.col}]`;
            path.push(nextAns);
            currentNode.prevNode = currentNode.prevNode.prevNode;
            }
            console.log(`Success, you made it in ${shortestDist} moves! Here was your path:`);
            console.log(path.reverse());
            
            return shortestDist; 
        }

        visited.add(currentNode.getString()); //Use string to ensure unique identifier for node

        for(const move of getMoves(currentNode.row,currentNode.col)) {
            if(move[0] > 7 || move[1] > 7 || move[0] < 0 || move[1] < 0) continue;

            const nextMove = Node(move[0],move[1], currentNode.distFromStart+1);
            nextMove.prevNode = currentNode;
            
            if(visited.has(nextMove.getString())) continue;
            if(nextMove) {
            queue.push(nextMove);
            }
        }
    }
}

const getBoard = () => {
    const board = [];
    for(let i=0;i<8;i+=1) {
        board[i] = [];
        for(let j=0;j<8;j+=1) {
            board[i][j] = `[${i}, ${j}]`;
        }
    }
    return board;
}

const board = getBoard();
let testNode = Node(0,0,0);
console.log(testNode.getString());

console.log(getMoves(0,0));

console.log(knightMoves([0,0], [6,3]));
knightMoves([0,0], [6,6]);
knightMoves([2,5], [7,3]);

knightMoves([0,-1], [3,8]);