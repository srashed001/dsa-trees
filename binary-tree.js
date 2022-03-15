/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {


    const queue = this.root ? [[this.root, 1] ] : []


    while(queue.length){
      const [current, count] = queue.shift();

      if(!current.left && !current.right) return count
      if(current.left) queue.push([current.left, count+1])
      if(current.right) queue.push([current.right, count +1])
    }

    return 0


  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {


    const queue = this.root ? [[this.root, 1] ] : []
    let max = 0


    while(queue.length){
      const [current, count] = queue.shift();

      if(!current.left && !current.right && count > max) max = count
      if(current.left) queue.push([current.left, count+1])
      if(current.right) queue.push([current.right, count +1])
    }

    return max

    

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {

    if(!this.root) return 0

    const leftQueue = this.root?.left ? [[this.root.left, 0] ] : []
    const rightQueue = this.root?.right ? [[this.root.right, 0] ] : []
    let leftMaxSum = this.root.left.val
    let rightMaxSum = this.root.right.val


    while(leftQueue.length){
      const [current, sum] = leftQueue.shift();
 

      if(!current.left && !current.right && sum + current.val > leftMaxSum ) leftMaxSum = sum + current.val
      if(current.left) leftQueue.push([current.left, current.val + sum])
      if(current.right) leftQueue.push([current.right, current.val + sum])
    }

    while(rightQueue.length){
      const [current, sum] = rightQueue.shift();

      if(!current.left && !current.right && sum + current.val > rightMaxSum) rightMaxSum = sum + current.val
      if(current.left) rightQueue.push([current.left, sum+current.val])
      if(current.right) rightQueue.push([current.right, sum+current.val])
    }

    return leftMaxSum + rightMaxSum + this.root.val


  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, stack = []) {

    if(this.root) stack.push(this.root);
    let max = null

    while(stack.length){
      const current = stack.pop();
      if(current.val > lowerBound && (!max || current.val < max)) max = current.val
      if(current.left) stack.push(current.left)
      if(current.right) stack.push(current.right)
    }

    return max

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2, queue = []) {

    if(this.root) queue.push([this.root, 1, null])

    let node1Level; 
    let node1Parent;
    let node2Level; 
    let node2Parent; 

    while(queue.length){
      const [current, level, parent] = queue.shift(); 
      if (current === node1){
        node1Level = level
        node1Parent = parent
      }

      if(current === node2){
        node2Level = level
        node2Parent = parent
      }

      if(node1Level && node2Level) break

      if(current.left) queue.push([current.left, level + 1, current])
      if(current.right) queue.push([current.right, level + 1, current])
    }

    return node1Level === node2Level && node1Parent !== node2Parent



  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
