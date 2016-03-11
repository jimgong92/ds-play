import constructorSpec from './constructorSpec';
import insertSpec from './insertSpec';
import containsSpec from './containsSpec';
import removeSpec from './removeSpec';

function spec() {
  const suite = {};

  describe('Binary Search Tree', () => {
    constructorSpec(suite);
    insertSpec(suite);
    containsSpec(suite);
    removeSpec(suite);
  });
}

export default spec;
