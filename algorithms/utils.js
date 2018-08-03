module.exports = (function () {

    let isSorted = (arr) => {
        let isSorted = true;
        for (let i = 0; i < arr.length; i++)
            if (arr[i] > arr[i + 1]) isSorted = false

        return isSorted
    }

    let swap = (arr, i, j) => {
        let t = arr[j];
        arr[j] = arr[i];
        arr[i] = t;
        return arr
    }

    return {
        isSorted,
        swap
    }
})();