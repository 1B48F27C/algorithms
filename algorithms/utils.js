module.exports = (function(){
    
    let isSorted = (arr) => {
        let isSorted = true;
        arr.reduce((pV,cV)=>{
            if (cV < pV) isSorted = false
        });
        return isSorted
    }
    
    return {
        isSorted
    }
})();