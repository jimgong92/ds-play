import lib from '../../index';
import { expect } from 'chai';

const { BinarySearchTree, util } = lib;

function spec(suite) {
  describe('Contains', () => {
    it('should get frequency of value if current node has value', done => {
      const testBST = new BinarySearchTree([5, 5]);
      const frequency = testBST.contains(5);
      expect(frequency).to.equal(2);
      done();
    });
    it('should return 0 if BST does not contain value', done => {
      const testBST = new BinarySearchTree([5, 5]);
      const frequency = testBST.contains(3);
      expect(frequency).to.equal(0);
      done();
    });
    it('should recurse down to identify if value in tree', done => {
      const testBST = new BinarySearchTree([1,2,3]);
      const frequency = testBST.contains(3);
      expect(frequency).to.equal(1);
      done();
    });
  });
}

export default spec;
