class Graph{
    constructor(){
        this.adjacencyList = {};
    }


    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set();
        }
    }

    addEdges(vertex1, vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].add(vertex2);
        this.adjacencyList[vertex2].add(vertex1);
    }

    removeEdges(vertex1, vertex2){
        this.adjacencyList[vertex1].delete(vertex2);
        this.adjacencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }

        for(let vert of this.adjacencyList[vertex]){
            this.removeEdges(vertex, vert);
        }

        delete this.adjacencyList[vertex];
    }

    dfs(vertex){
        let visited = new Set();

        let DfsRecursive = (vertex)=>{
            if(vertex === null){
                return;
            }
            console.log(vertex);
            visited.add(vertex);

            for(let vert of this.adjacencyList[vertex]){
                if(!visited.has(vert)){
                    DfsRecursive(vert);
                }
            }
        }
        DfsRecursive(vertex);
    }

    bfs(vertex){
        let visited = new Set();
        let queue = [];
        visited.add(vertex);
        queue.push(vertex);

        while(queue.length){
            let current = queue.shift();
            console.log(current);
            let neighbours = this.adjacencyList[current];

            for(const vert of neighbours){
            if(!visited.has(vert)){
                visited.add(vert);
                queue.push(vert);
            }
            }
        }
    }

    checkConnectDfs(vertex){
        let visited = new Set();
        let DfsRecursive = (vertex)=>{
            if(!vertex || visited.has(vertex)){
                return;
            }
            visited.add(vertex);
            for(let vert of this.adjacencyList[vertex]){
                DfsRecursive(vert);
            }
        };
        DfsRecursive(vertex);
        return visited;
    }

    isConnnected(){
        const vertices = Object.keys(this.adjacencyList);
        if(vertices.length === 0) return true;

        let visited = this.checkConnectDfs(vertices[0]);
        return visited.size === vertices.length;
    }

    hasCycle(){
        let visited = new Set();

        const dfs = (vertex, parent)=>{
            visited.add(vertex);

            for(let neighbour of this.adjacencyList[vertex]){
              if(!visited.has(neighbour)){
                if(dfs(neighbour, vertex)){
                    return true;
                }
              }else if(neighbour !== parent){
                return true;
              }
            }
            return false;
        }

        for(let vertex in this.adjacencyList){
            if(!visited.has(vertex)){
                if(dfs(vertex, null)){
                    return true;
                }
            }
        }
        return false;

    }

    display(){
        for(let vert in this.adjacencyList){
            console.log(vert + " -->>>>>>> -----  " + [...this.adjacencyList[vert]]);
        }
    }

}


const G = new Graph();

G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");

G.addEdges("A", "B");
G.addEdges("B", "C");
G.addEdges("C", "D");
G.addEdges("D", "A");
// G.removeEdges("A", "B");
// G.removeVertex("A")
console.log(G)

G.dfs("A");
G.bfs("A")
G.display()
console.log(G.isConnnected());
console.log(G.hasCycle())

