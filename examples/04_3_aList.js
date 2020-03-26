function prepend(element, list) {
    return {value: element, rest: list};
}

function arrayToList(array) {
  	var list = {value: array[array.length - 1], rest: null};
  	for (var i = array.length - 2; i >= 0; i--)
    	list = prepend(array[i], list);
  	return list;
}

function listToArray(list) {
  	var array = [];
  	while (list) {
  		array.push(list.value)
  		list = list.rest;
  	}
  	return array;
}

function nth(list, number) {
    var position = 0;
    while (list.rest) { 
        if (position == number) {
            return list.value;
        } else {
            list = list.rest;
       		position +=1;
    	}
    }
    return undefined;
}

/*function nth(list, number) {
    if (!number) {
        return list.value;
    } else if (list.rest) {
        console.log(list.rest);
        console.log(number == 0);
        nth(list.rest, number - 1);
    } else
        return undefined;
}
*/

function nth(list, number) {
	console.log(number);
    if (!number) {
    	console.log(list);
    	console.log(number);
    	console.log(list.value);
        return list.value;
    } else if (list.rest) {
        console.log(list.rest);
        console.log(number - 1);
        console.log(number - 1 == 0);
        return nth(list.rest, number - 1);
    } else
        return undefined;
}


console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20