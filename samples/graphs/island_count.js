const Q = require("../stacks_and_queues/Queue");


function islandCount(M) {
    // return the number of islands
    // we will traverse the matrix M
    // in a BFS manner

    let count = 0;
    const cols = M[0].length;
    const rows = M.length;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (M[r][c] == 1) {
                // this is an island
                count++;
                // visit neighbours
                // itself included
                visitCells(r, c, M);
            }
        }
    }

    function visitCells(row, col, M) {
        let q = new Q();
        q.enqueue([row, col]);
    
        while (!q.isEmpty()) {
            let [ r, c ] = q.dequeue();
            M[r][c] = -1; // visited

            if (c < cols - 1 && M[r][c + 1] == 1) {
                q.enqueue([r, c + 1]);
            }
            if (r < rows - 1 && M[r + 1][c] == 1) {
                q.enqueue([r + 1, c]);
            }
        }
    }

    return count;
}


// test
let m = [
    [ 1, 1, 0, 1 ],
    [ 0, 0, 1, 0 ],
    [ 1, 0, 1, 0 ],
    [ 0, 1, 0, 1 ],
    [ 0, 1, 1, 0 ]
]

console.log(islandCount(m), "|", 6);
