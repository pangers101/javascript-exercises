const fibonacci = function(pos) {
    let seq = [];
    seq[0] = 0;
    if(+pos < 0){ return "OOPS"; }

    for(let i = 1; i <= +pos; i++){
        if(i === 1){
            seq.push(1);
        } else{
            seq.push(seq[i - 2] + seq[i-1]);
        }
    }
    //console.log(seq);
    return seq[+pos];
};

// Do not edit below this line
module.exports = fibonacci;
