/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let sumStack = this.root ? [this.root] : []
    let sum = 0; 

    while (sumStack.length){
      let current = sumStack.pop();
      sum+=current.val;
      for(let child of current.children) sumStack.push(child)
    }

    return sum
    
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    let countStack = this.root ? [this.root] : []
    let count = 0
    while (countStack.length){
      let current = countStack.pop();
      if(current.val % 2 === 0) count ++
      for(let child of current.children) countStack.push(child) 
    }

    return count

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    let greaterStack = this.root ? [this.root] : []
    let count = 0;

    while(greaterStack.length){
      let current = greaterStack.pop();
      if(current.val > lowerBound) count ++
      for(let child of current.children) greaterStack.push(child)
    }

    return count

  }
}

module.exports = { Tree, TreeNode };
