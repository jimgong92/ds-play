const sentinel = { value: null };

class BinarySearchTree {
  constructor(init = null) {
    this.left = this.right = sentinel;
    this.frequency = 1;

    if (init instanceof Array) {
      const [value, ...remainder] = init;
      this.value = value;
      for (let item of remainder) this.insert(item);
    }
    else {
      this.value = init;
    }
  }
  insert(value) {
    if (this.value === null) {
      this.value = value;
      return this;
    }
    else if (value === this.value) {
      this.frequency++;
      return this;
    }
    else if (value < this.value) {
      if (this.left === sentinel) {
        this.left = new BinarySearchTree(value);
        return this.left;
      }
      return this.left.insert(value);
    }
    else {
      if (this.right === sentinel) {
        this.right = new BinarySearchTree(value);
        return this.right;
      }
      return this.right.insert(value);
    }
  }
  contains(value) {
    if (value === this.value) return this.frequency;
    else if (value < this.value && this.left.value) return this.left.contains(value);
    else if (this.right.value) return this.right.contains(value);
    return 0;
  }
  remove(value) {
    if (value === this.value) {
      if (this.frequency > 1) {
        this.frequency--;
      }
      else if (this.left.value) {
        // Retrieve max value in left subtree
        let parent = this;
        let maxLeft = this.left;
        while (maxLeft.right.value !== null) {
          parent = maxLeft;
          maxLeft = maxLeft.right;
        };
        // Attach max value's left subtree to its parent if not original parent
        if (parent !== this) parent.right = maxLeft.left;
        if (maxLeft === this.left) this.left = maxLeft.left;
        // Assign value, frequency to this subtree's root
        this.value = maxLeft.value;
        this.frequency = maxLeft.frequency;
      }
      else if (this.right.value) {
        let parent = this;
        let minRight = this.right;
        while (minRight.left.value !== null) {
          parent = minRight;
          minRight = minRight.left;
        };
        if (parent !== this) parent.left = minRight.right;
        if (minRight === this.right) this.right = minRight.right;
        this.value = minRight.value;
        this.frequency = minRight.frequency;
      }
      else this.value = null;
      return true;
    }
    else if (value < this.value) {
      if (this.left.value === null) return false;
      return this.left.remove(value);
    }
    else {
      if (this.right.value === null) return false;
      return this.right.remove(value);
    }
  }
  traverse(callback) {
    if (this.left) this.left.traverse(callback);
    callback(this.value);
    if (this.right) this.right.traverse(callback);
  }
}

export default BinarySearchTree;
