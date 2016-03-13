const sentinel = { value: null };

class RedBlackTree {
  constructor(init = null, isBlack=true) {
    this.left = this.right = sentinel;
    this.isBlack = isBlack;
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
    this.sentinel = this.
  }
  contains(value) {
  }
  remove(value) {
  }
  traverse(callback) {
  }
}

export default RedBlackTree;
