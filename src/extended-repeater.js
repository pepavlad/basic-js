module.exports = function repeater(str, options) {
    let result = [], subStr = [], separator = options.separator || '+', addition, additionSeparator = String(options.additionSeparator)|| '|';
    if (String(options.addition) == 'false') {
        addition = 'false';
    } else if(String(options.addition) == 'null'){
        addition = 'null';
    } else addition = options.addition || '';
    if(options.additionRepeatTimes != undefined){
        for(let i = 0; i < options.additionRepeatTimes; i++){
            subStr.push(String(addition));
        }
    } else subStr.push(String(addition));
    if(options.repeatTimes != undefined){
        for(let i = 0; i < options.repeatTimes; i++){
            result.push(str + subStr.join(additionSeparator));
        }
    } else result.push(str + String(addition));
    return result.join(separator);
};
  