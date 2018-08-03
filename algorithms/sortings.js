let utils = require('./utils');

module.exports = (function () {
    let bubbleSort = function (arr) {
        if (arr && arr.length > 1) {
            let swapped = true;
            while (swapped) {
                swapped = false;
                for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] > arr[i + 1]) {
                        arr = utils.swap(arr, i, i + 1);
                        swapped = true;
                    }
                }
            }
        }
        return arr
    }

    let selectionSort = function (arr) {
        if (arr && arr.length > 1) {
            let minIndex;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[i])
                        arr = utils.swap(arr, i, j)
                }
            }
        }
        return arr
    }

    return {
        bubbleSort,
        selectionSort
    }
})();