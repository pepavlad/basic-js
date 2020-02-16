const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(FINAL_ACTIVITY) {
  if(typeof FINAL_ACTIVITY == 'string'){
    if (!/^[0-9]*[\.]{0,1}[0-9]*[\.]{0,1}[0-9]*$/.test(FINAL_ACTIVITY) || FINAL_ACTIVITY <= 0 || FINAL_ACTIVITY > 15){
        return false;
      }
    return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(FINAL_ACTIVITY.match(/^[0-9]*[\.]{0,1}[0-9]*/)))/0.693*HALF_LIFE_PERIOD);
    }
    return false;
};
