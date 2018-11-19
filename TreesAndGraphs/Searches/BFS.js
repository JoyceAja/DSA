
const bfs_iterative = (root, target) => {
    const queue = [root]

    while(queue.length > 0){
        let node = queue.shift()

        if(node.value === target){
            return node
        }
        if(node.left){queue.push(node.left)}
        if(node.right){queue.push(node.right)}
    }
    return null;
}

const bfs_iterative_graph = (root) => {
    const queue = [root]

    while(queue.length > 0){
        let node = queue.shift()

        for(let i=0; i<node.children.length; i++){
            if(!node.children[i].visit){
                node.children[i].visit = true
                queue.push(node.children[i])
            }
        }
    }
}