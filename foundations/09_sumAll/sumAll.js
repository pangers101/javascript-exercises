const sumAll = function(a, b) {
    let lowest, highest;
    if(a < b){
        lowest = a;
        highest = b;
    }else{
        lowest = b;
        highest = a;
    }
    let total = 0;
    let counter = lowest;
    while(counter <= highest){
        total += counter;
        counter++;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
