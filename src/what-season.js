module.exports = function getSeason(date) {
    if (date == undefined) return 'Unable to determine the time of year!';
    let month = date.getMonth();
    if (Object.keys(date).length >= 1) throw new Error('Error');
    if (month <=1 || month==11) return "winter";
    if (month >= 2 && month < 5) return 'spring';
    if (month >= 5 && month < 8) return 'summer';
    if (month >= 8 && month < 11) return 'autumn';
};
