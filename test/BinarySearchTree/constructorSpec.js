import lib from '../../index';
import { expect } from 'chai';

const { BinarySearchTree, util } = lib;

function spec(suite) {
  describe('Constructor', () => {
    it('should initialize a BST with a primitive', done => {
      const testBST = new BinarySearchTree(7);
      expect(testBST.value).to.equal(7);
      expect(testBST.frequency).to.equal(1);
      expect(testBST.left.value).to.be.null;
      expect(testBST.right.value).to.be.null;
      done();
    });
    it('should have a null default value', done => {
      const testBST = new BinarySearchTree();
      expect(testBST.value).to.be.null;
      expect(testBST.frequency).to.equal(1);
      expect(testBST.left.value).to.be.null;
      expect(testBST.right.value).to.be.null;
      done();
    });
    it('should initialize a BST with a collection', done => {
      const testBST = new BinarySearchTree([5,5,3,6,1,4,11]);
      expect(testBST.value).to.equal(5);
      expect(testBST.frequency).to.equal(2);
      expect(testBST.left.value).to.equal(3);
      expect(testBST.left.left.value).to.equal(1);
      expect(testBST.left.left.left.value).to.be.null;
      expect(testBST.left.left.right.value).to.be.null;
      expect(testBST.left.right.value).to.equal(4);
      expect(testBST.left.right.left.value).to.be.null;
      expect(testBST.left.right.right.value).to.be.null;
      expect(testBST.right.value).to.equal(6);
      expect(testBST.right.left.value).to.be.null;
      expect(testBST.right.right.value).to.equal(11);
      expect(testBST.right.right.left.value).to.be.null;
      expect(testBST.right.right.right.value).to.be.null;
      done();
    });
  });
}

export default spec;
