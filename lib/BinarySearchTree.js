class BinarySearchTree {
  constructor(init = null) {
    this.leftSize = this.rightSize  = 0;
    this.left     = this.right      = null;
    this.frequency = 1;

    if (init instanceof Array) {
      const [value, ...remainder] = init;
      for (let item of remainder) this.insert(item);
    }
    else this.value = init;
  }
  insert(value) {

  }
  contains(value) {

  }
  remove(value) {
    
  }

}

export default BinarySearchTree;