module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(!Array.isArray(arr)) return 0;
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            res = Math.max(res, this.calculateDepth(arr[i]));
        }
        res += 1;
        return res;
    }
};