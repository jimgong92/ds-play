import lib from '../index';
import { expect } from 'chai';

const { BinarySearchTree, util } = lib;

function spec() {
  console.log(BinarySearchTree);
  describe('Binary Search Tree', () => {
    it('should initialize a BST with a primitive', done => {
      const testBST = new BinarySearchTree(7);
      expect(testBST instanceof BinarySearchTree).to.be.true;
      expect(testBST.value).to.equal(7);
      expect(testBST.frequency).to.equal(1);
      expect(testBST.left).to.be.null;
      expect(testBST.right).to.be.null;
      done();
    });
    it('should have a null default value', done => {
      const testBST = new BinarySearchTree();
      expect(testBST instanceof BinarySearchTree).to.be.true;
      expect(testBST.value).to.be.null;
      expect(testBST.frequency).to.equal(1);
      expect(testBST.left).to.be.null;
      expect(testBST.right).to.be.null;
      done();
    });
  });
}

export default spec;
