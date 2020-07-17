//Get's the user's Year of Birth and retrieves the first two digits

var year =prompt('Enter your age here');

var CCs = year.slice(0, 2);

var CC = parseInt(CCs);
alert(CC);