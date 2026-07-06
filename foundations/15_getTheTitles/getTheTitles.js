const getTheTitles = function(bookObjects) {
    let bookTitleArray = bookObjects.map((obj) => obj.title );
    return bookTitleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
