module.exports = (function(){
    
    let isSorted = (arr) => {
        let isSorted = true;
        arr.reduce((pV,cV)=>{
            if (cV < pV) isSorted = false
        });
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