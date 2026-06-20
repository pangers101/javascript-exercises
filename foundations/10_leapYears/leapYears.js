const leapYears = function(year) {
    if(Number.isInteger(year / 4)){
        if(year % 100 === 0 && year % 400 === 0){
            return false;
        } else{
            return true;
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
