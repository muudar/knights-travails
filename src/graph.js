class Queue {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }
    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }
    peek() {
      return this.elements[this.head];
    }
    get length() {
      return this.tail - this.head;
    }
    get isEmpty() {
      return this.length === 0;
    }
  }

function dijkstra(startNode, endNode, N){
    let graph = {};
    let distances = {};
    for(let i = 0; i < N; i++){
        for(let j = 0; j < N; j++){
            distances[[i,j]] = Infinity;
            graph[[i,j]] = [];
            let curr = [i,j];
            let possibles = []
            possibles.push([i+2,j+1], [i+2, j-1] , [i-2, j+1], [i-2, j-1], [i+1, j+2], [i+1, j-2], [i-1, j+2], [i-1, j-2]);
            for(let possible of possibles){
                if((possible[0] >= 0 && possible[0] <= 7) && (possible[1] >= 0 && possible[1] <= 7)){
                    graph[[i,j]].push(possible);
                }
            }
        }
    }
    let visited = new Set();
    visited.add(startNode);
    let parents = {};
    parents[startNode] = null;
    distances[startNode] = 0;
    let queue = new Queue();
    queue.enqueue(startNode);
    let found = false;
    while(!queue.isEmpty && !found){
        let currNode = queue.dequeue();
        for(let node of graph[currNode]){
            if(!visited.has(node)){
                queue.enqueue(node);
                if(distances[node] > distances[currNode] + 1){
                    parents[node] = currNode;
                }
                distances[node] = Math.min(distances[node], distances[currNode] +1);
                visited.add(node);
            }
        }
    }
    let firstParent = endNode;
    let path = [];
    while(firstParent != null){
        path.push(firstParent);
        firstParent = parents[firstParent];
    }
    return path.reverse();
}

export {dijkstra};