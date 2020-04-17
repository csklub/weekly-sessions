const Q = require("../stacks_and_queues/Queue");


function islandCount(M) {
    // return the number of islands
    // we will traverse the matrix M
    // in a BFS manner


    let q = new Q();
    let count = 0;
    const cols = M[0].length;
    const rows = M.length;

    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
            visitCell(r, c);

    function visitCell(row, col) {
        if (M[row][col] == 1) {
            q.enqueue([row, col]);
            // this is an island
            count++;
        }
    
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

console.log(islandCount(m), "|", 7);
