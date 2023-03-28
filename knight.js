const Node = (row, col, distFromStart) => {

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

const getMoves = (row, col) => {

}

const knightMoves = (src, dst) => {
    const queue = [];
    const startPos = Node(src[0], src[1], 0);
    queue.push(startPos);

    const visited = new Set();

    while(queue.length > 0) {
        const currentNode = queue.shift();

        if(src[0] === dst[0] && src[1] === dst[1]) return distFromStart;


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