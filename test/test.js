'use strict';
const assert = require('assert');
let sortings = require('../algorithms/sortings');
let utils = require('../algorithms/utils');
let arrayExample = [32, 48, 83, 58, 86, 97, 32, 61, 37, 14, 43, 95];
describe('Sortings', function () {
  it('BubbleSort', function () {
    let resultArray = sortings.bubbleSort(arrayExample);
    let result = utils.isSorted(resultArray);
    assert.deepEqual(result, true)
  });

  it('SelectionSort', function () {
    let resultArray = sortings.selectionSort(arrayExample);
    let result = utils.isSorted(resultArray);
    assert.deepEqual(result, true)
  });
});