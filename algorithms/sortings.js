module.exports = (function () 
{
    let bubbleSort = function(arr){
        console.log(`Before sorting: [${arr}]`)
        
        if (arr && arr.length > 1){
            let swapped = true;
            while (swapped) {
                let t;
                swapped = false;
                for (let i = 0; i<arr.length-1; i++) {
                    if (arr[i] > arr[i+1]){
                        t = arr[i+1];
                        arr[i+1] = arr[i];
                        arr[i] = t;
                        swapped = true;
                    }
                }
            }
        }
        return arr
    }
    return {
        bubbleSort
    }
})();