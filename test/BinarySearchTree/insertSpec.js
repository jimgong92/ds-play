import lib from '../../index';
import { expect } from 'chai';

const { BinarySearchTree, util } = lib;

function spec(suite) {
  describe('Insert', () => {
    it('should replace a null value in tree', done => {
      const testBST = new BinarySearchTree();
      expect(testBST.value).to.be.null;
      testBST.insert(3);
      expect(testBST.value).to.equal(3);
      expect(testBST.frequency).to.equal(1);
      expect(testBST.left).to.be.null;
      expect(testBST.right).to.be.null;
      done();
    });
    it('should add left child if less than parent node', done => {
      const testBST = new BinarySearchTree(2);
      expect(testBST.left).to.be.null;
      expect(testBST.right).to.be.null;
      testBST.insert(1);
      expect(testBST.left.value).to.equal(1);
      done();
    });
    it('should add right child if greater than parent node', done => {
      const testBST = new BinarySearchTree(2);
      expect(testBST.left).to.be.null;
      expect(testBST.right).to.be.null;
      testBST.insert(3);
      expect(testBST.right.value).to.equal(3);
      done();
    });
    it('should append to descendant node with empty left or right', done => {
      const testBST = new BinarySearchTree([10,5,15]);
      expect(testBST.left.left).to.be.null;
      testBST.insert(1);
      expect(testBST.left.left.value).to.equal(1);
      done();
    });
  });
}

export default spec;
