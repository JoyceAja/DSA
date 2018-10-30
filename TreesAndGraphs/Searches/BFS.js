
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