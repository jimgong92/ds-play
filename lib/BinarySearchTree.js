class BinarySearchTree {
  constructor(init = null) {
    this.left = this.right = null;
    this.frequency = 1;

    if (init instanceof Array) {
      const [value, ...remainder] = init;
      this.value = value;
      for (let item of remainder) this.insert(item);
    }
    else this.value = init;
  }
  insert(value) {
    if (this.value === null || this.value === undefined) {
      console.log(value);
      this.value = value;
      return this;
    }
    else if (value === this.value) {
      this.frequency++;
      return this;
    }
    else if (value < this.value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
        return this.left;
      }
      return this.left.insert(value);
    }
    else {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
        return this.right;
      }
      return this.right.insert(value);
    }
  }
  contains(value) {
    if (value === this.value) return true;
    else if (value < this.value && this.left) return this.left.contains(value);
    else if (this.right) return this.right.contains(value);
    return false;
  }
  remove(value) {
    if (value === this.value) {
      if (this.left) {
        if (this.left.right) {
          let minRight = this.right;
          while (minRight.left) minRight = minRight.left;
          minRight.left = this.left.right;
          this.value = this.left.value;
          this.left = this.left.left;
        }
        else this.left.right = this.right;
      }
      else if (this.right) {
        if (this.right.left) {
          let maxLeft = this.left;
          while (maxLeft.right) maxLeft = maxLeft.right;
          maxLeft.right = this.right.left;
          this.value = this.right.value;
          this.right = this.right.right
        }
        else this.right.left = this.left;
      }
      else this.value = null;
      return true;
    }
    else if (value < this.value) {
      if (this.left === null) return false;
      return this.left.remove(value);
    }
    else {
      if (this.right === null) return false;
      return this.right.remove(value);
    }
  }
  traverse(callback) {
    if (this.left) this.left.map(callback);
    callback(this.value);
    if (this.right) this.right.map(callback);
  }

}
// var a = new lib.BST([25,20,18,19,24,8,7,3,23,30,27,31]);
export default BinarySearchTree;