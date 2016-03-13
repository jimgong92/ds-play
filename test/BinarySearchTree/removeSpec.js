import lib from '../../index';
import { expect } from 'chai';

const { BinarySearchTree, util } = lib;

function spec(suite) {
  describe('Remove', () => {
    it('should set node value to null if it matches target', done => {
      const testBST = new BinarySearchTree(1);
      testBST.remove(1);
      expect(testBST.value).to.be.null;
      done();
    });
    it('should return true if value removed', done => {
      const testBST = new BinarySearchTree(1);
      expect(testBST.remove(1)).to.be.true;
      done(); 
    });
    it('should remove 1 frequency if frequency of value > 2', done => {
      const testBST = new BinarySearchTree([1, 1, 1]);
      testBST.remove(1);
      expect(testBST.frequency).to.equal(2);
      done(); 
    });
    it('should prefer to rotate left subtree if node removed', done => {
      const testBST = new BinarySearchTree([5, 3, 3, 7]);
      testBST.remove(5);
      expect(testBST.value).to.equal(3);
      expect(testBST.frequency).to.equal(2);
      expect(testBST.left.value).to.be.null;
      expect(testBST.right.value).to.equal(7);
      done(); 
    });
    it('should rotate right subtree in left subtree is null', done => {
      const testBST = new BinarySearchTree([5, 7, 7, 7]);
      testBST.remove(5);
      expect(testBST.value).to.equal(7);
      expect(testBST.right.value).to.be.null;
      expect(testBST.frequency).to.equal(3);
      done(); 
    });
    it('should rotate the max value in the left subtree', done => {
      const testBST = new BinarySearchTree([6,3,2,5,4,8,7,9]);
      testBST.remove(6);
      expect(testBST.value).to.equal(5);
      expect(testBST.right.value).to.equal(8);
      expect(testBST.left.value).to.equal(3);
      expect(testBST.left.left.value).to.equal(2);
      expect(testBST.left.right.value).to.equal(4);
      done();
    });
    it('should rotate the min value in the right subtree', done => {
      const testBST = new BinarySearchTree([6,10,8,7,9,12]);
      testBST.remove(6);
      expect(testBST.value).to.equal(7);
      expect(testBST.right.value).to.equal(10);
      expect(testBST.right.left.value).to.equal(8);
      expect(testBST.right.left.right.value).to.equal(9);
      expect(testBST.right.right.value).to.equal(12);
      expect(testBST.left.value).to.be.null;
      done();
    });
  });
}

export default spec;
