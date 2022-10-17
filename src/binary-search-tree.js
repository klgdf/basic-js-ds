const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  BinaryTree = null

  root() {
    return this.BinaryTree
  }

  add(data) {
    this.BinaryTree = addWithin(this.BinaryTree, data)

    function addWithin(node, data) {
      if (!node) {
        return new Node(data)
      }

      if (data === node.data) {
        return node
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }

      return node
    }
  }

  has(data) {
    return searchWithin(this.BinaryTree, data)

    function searchWithin(node, data) {
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data)
    }
  }

  find(data) {
    return findNode(this.BinaryTree, data)

    function findNode(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
  }

  remove(data) {
    this.BinaryTree = removeNode(this.BinaryTree, data)

    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right
          return node
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let current = node.right

        while (current.left) {
          current = current.left
        }
        node.data = current.data
        node.right = removeNode(node.right, current.data)
        return node
      }
    }
  }

  min() {
    if (!this.BinaryTree) {
      return null
    }

    let min = this.BinaryTree
    while (min.left) {
      min = min.left
    }

    return min.data
  }

  max() {
    if (!this.BinaryTree) {
      return null
    }

    let max = this.BinaryTree
    while (max.right) {
      max = max.right
    }

    return max.data
  }
}

module.exports = {
  BinarySearchTree
};