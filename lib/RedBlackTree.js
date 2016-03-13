const sentinel = { value: null };

class RedBlackTree {
  constructor(init = null) {
    this.left = this.right = sentinel;
    this.black = true;
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
  }
  contains(value) {
  }
  remove(value) {
  }
  traverse(callback) {
  }
}

export default RedBlackTree;
