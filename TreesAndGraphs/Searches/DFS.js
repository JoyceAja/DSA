/**
 * Depth First Search for trees
 * @param {*root node} root 
 * @param {*target node} target 
 */

const dfs_recursive = (root, target) => {
    //base case
    if(root.value === target){ 
        return root
    }
    if(root.right){
        let result = dfs_recursive(root.right, target)
        if(result){
            return result
        }
    }
    if(root.left){
        let result = dfs_recursive(root.left, target)
        if(result){
            return result
        }
    }
    return null
}


const dfs_iterative = (root, target) => {
    const stack = [root]

    while(stack.length > 0){
        let node = stack.pop()

        if(node.value === target){
            return node
        }
        if(node.right){stack.push(node.right)}
        if(node.left){stack.push(node.left)}
    }
    return null
}

/**
 * Depth First Search for Graphs
 */

 const dfs_recursive_graph = (root) => {
     if(root === null) return;

     for(let i=0; i<root.childen.length; i++){
         if(!root.children[i].visted){
             dfs_recursive_graph(root.childen[i])
         }
     }

 }