import * as assert from 'assert';
import { expect } from 'chai';
import {stackPush, stackPop, stackGetIterator, stackPeek} from '../linkedstack.js';

describe('Stack', function () {
  describe('#stackPush() one', function () {
    it('should be able to add number to a stack', function () {
      let stack;
      stack = stackPush(stack)(2)
      assert.equal(stack.value, 2);
    });
    it('should be able to add object to a stack', function () {
      let stack;
      stack = stackPush(stack)({"foo" : "bar"})
      assert.equal(stack.value["foo"], "bar");
    });
  });
  describe('#stackPush() #stackPop() many', function () {
    it('should be able to add many numbers to, and remove numbers from a stack', function () {
      let stack;
      stack = stackPush(stack)(1)
      stack = stackPush(stack)(2)
      stack = stackPush(stack)(3)
      stack = stackPush(stack)(4)
      stack = stackPush(stack)(5)
      assert.equal(stack.value, 5);
      stack = stackPop(stack)
      assert.equal(stack.value, 4);
      stack = stackPop(stack)
      assert.equal(stack.value, 3);
      stack = stackPop(stack)
      assert.equal(stack.value, 2);
      stack = stackPop(stack)
      assert.equal(stack.value, 1);
      stack = stackPop(stack)
      expect(stack).to.be.undefined;
    });
    it('should be able to add many numbers to, and remove numbers from a stack', function () {
      let stack;
      stack = stackPush(stack)({"george" : "bass"})
      assert.equal(stack.value["george"], "bass");
      stack = stackPush(stack)({"ringo" : "drums"})
      assert.equal(stack.value["ringo"], "drums");
      stack = stackPop(stack)
      assert.equal(stack.value["george"], "bass");
    });
  });
});
