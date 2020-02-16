module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new 'Error';
    if(arr == []) {
        return arr;
    }
    let resArr = [];
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] == '--discard-next') {
            if(i < arr.length - 1) {
                i++;
            }
        } else if(arr[i] == '--discard-prev') {
            if(resArr.length > 0) {
                resArr.pop();
            }
        } else if(arr[i] == '--double-next') {
            if(i < arr.length - 1) {
                resArr.push(arr[i + 1]);
            }
        } else if(arr[i] == '--double-prev') {
            if(i > 0) {
                resArr.push(arr[i - 1]);
            }
        } else {
            resArr.push(arr[i]);
        }
    }
    return  resArr;
};
