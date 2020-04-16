const Queue = require("../stacks_and_queues/Queue");

class Vertex {
    constructor(node){
        this._edges = node;
    }

    childNodes(){
        this.vertices = [];
        let _this = this;
        this._edges.forEach(function(edge, index){
            if(edge > 0){
                _this.vertices.push(index);
            }
        });
        console.log(`Found ${this.vertices.length} edges: [${this.vertices}]`);
        return this.vertices;
    }
}


class BFS {
    constructor(adjacencyMatrix, startNode) {
        this._graph = adjacencyMatrix;
        // Start node is passed or pick a random start node
        this._startNode = startNode - 1 ;

        this._traverseQueue = new Queue();
        this._traversedArray = [];
    }

    numberOfNodes(){
        return this._graph.length
    }

    visit() {
        // If our queue has items, remove one and explore it
        while (this._traverseQueue.size() > 0) {
            console.log(`\nExplored array has ${this._traversedArray.length} vertices: [${this._traversedArray}]`);
            console.log(`Current queue has ${this._traverseQueue.size()} vertices: [${this._traverseQueue._toArray()}]`);

            let vertex = this._traverseQueue.dequeue();
            this._traversedArray.push(vertex);
            console.log(`Picked vertex ${vertex} from queue`);
            this.explore(vertex);
        }

    }
    explore(vertex) {
        console.log("Exploring vertex " + vertex);
        // Create node object
        let vertexObject = new Vertex(this._graph[vertex]);

        // Get the adjacent vertices and add them to queue
        let vertices = vertexObject.childNodes();
        let _this = this;
        vertices.map(function (vertex) {
            if(!_this._traversedArray.includes(vertex)){
                console.log(`Add vertex ${vertex} to queue`);
                _this._traverseQueue.enqueue(vertex);
            } else {
                console.log(`Vertex ${vertex} has been traversed. Skipping...`);
            }
        });

        // Recursively traverse the nodes
        this.visit();
    }

    traverse() {
        if( this.numberOfNodes() > 0){ // Ensure we have at least one node

            // Add first node to queue and explored array
            console.log(`Start by adding vertex ${this._startNode + 1} to queue. \n`);
            this._traverseQueue.enqueue(this._startNode);

            // Visit the node
            this.visit();
        }
        console.info("Traversal finished\n");
        console.log(`Traversed in the order [${this._traversedArray}]`)
    }
}

// Adjacency matrix
const matrix = [
    [0,1,1,1,0,1],
    [0,0,1,0,0,1],
    [1,1,0,0,0,1],
    [0,0,0,1,0,1],
    [0,1,0,0,0,1],
    [0,1,1,1,0,1],
    // [0,1,1,1,0,1,1,1],
    // [0,0,1,0,0,1,0,1],
    // [1,1,0,0,0,1,1,0],
    // [0,0,0,1,0,0,1,1],
    // [0,1,0,0,0,0,0,1],
    // [0,1,0,1,0,0,0,1],
    // [0,1,1,0,0,0,0,0],
    // [0,1,1,0,1,0,0,0],
];


new BFS(matrix, 1).traverse();

