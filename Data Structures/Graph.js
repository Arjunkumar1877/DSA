
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

    const dfsRecursive = (vertex)=>{
        if(!vertex === null){
            return
        }

        console.log(vertex);
        visited.add(vertex);

        for(let vert of this.adjacencyList[vertex]){
            if(!visited.has(vert)){
                dfsRecursive(vert);
            }
        }
    }
    dfsRecursive(vertex);
   }

   bfs(vertex){
    let visited = new Set();
    let queue = [];
    visited.add(vertex);
    queue.push(vertex)

    while(queue.length){
        let current = queue.shift();
        console.log(current);
        let neighbor = this.adjacencyList[current];
        for(let vert of neighbor){
            if(!visited.has(vert)){
                visited.add(vert);
                queue.push(vert)
            }
        }
    }

   }

   checkDfs(vertex){
    let visited = new Set();

    let dfsRecursiveCheck = (vertex)=>{
        if(!vertex || visited.has(vertex)){
            return;
        }

        visited.add(vertex);
        for(let vert of this.adjacencyList[vertex]){
            dfsRecursiveCheck(vert);
        }
    }

    dfsRecursiveCheck(vertex);
    return visited;
   }

   checkIsConnected(){
    const vertices = Object.keys(this.adjacencyList);

    if(vertices.length === 0){
        return false;
    }

    let visited = this.checkDfs(vertices[0]);

    return visited.size === vertices.length;

   }

   hasACycle(){
    let visited = new Set();

    const dfs = (vertex, parent)=>{
        visited.add(vertex);

        for(let neighbor of this.adjacencyList[vertex]){
            if(!visited.has(neighbor)){
                if(dfs(neighbor, vertex)){
                    return true;
                }
            }else if(neighbor !== parent){
                   return true;
            }
        }
        return false;
    }

    for(let vert in this.adjacencyList){
        if(!visited.has(vert)){
            if(dfs(vert, null)){
                return true;
            }
        }
    }
    return false;
   }

}


const G = new Graph();

G.addVertex("A");
G.addVertex("B");
G.addVertex("C");
G.addVertex("D");

G.addEdges("A", "B");
G.addEdges("B", "C");
// G.addEdges("C", "D");
G.addEdges("D", "A");
// G.dfs("A");
// G.removeVertex('A')
// console.log(G);

G.dfs("B");
// G.bfs("A");

console.log(G.checkDfs('B'));

console.log(G.checkIsConnected());

console.log(G.hasACycle())