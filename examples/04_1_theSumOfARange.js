/*
function range(start, end) {
    var array = [];
    var step = 1;
    array[0] = start;
    if (!isNaN(arguments[2]))
    	step = arguments[2];
    for (var i = 1; i <= (end-start)/step; i++)
    	array[i] = array[i-1] + step;
    return array;
}
*/

/*
function range(start, end) {
    var array = [];
    var step = 1;
    array.push(start);
    if (!isNaN(arguments[2]))
    	step = arguments[2];
    for (var i = 1; i <= (end-start)/step; i++)
    	array.push(array[i-1] + step);
    
    return array;
}
*/

function range(start, end) {
    var array = [];
    var step = 1;
    if (!isNaN(arguments[2]))
    	step = arguments[2];

	if (step > 0) {
    	for (var i = start; i <= end; i += step)
      		array.push(i);
  	} else {
    	for (var i = start; i >= end; i += step)
      		array.push(i);
  	}
    
    return array;
}

function sum(array) {
    var total = 0;
    for (var i=0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


