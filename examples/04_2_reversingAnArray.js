/*
function reverseArray(array) {
    var rArray = [];
    for (var i = 0 ; i < array.length; i++)
            rArray.unshift(array[i]);
    return rArray;
}
*/

function reverseArray(array) {
    var rArray = [];
    for (var i = array.length - 1; i >= 0; i--)
            rArray.push(array[i]);
    return rArray;
}

function reverseArrayInPlace(array) {
    var temp;
    for (var i = 0; i < array.length/2; i++){
        temp = array[i];
        array[i]=array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    return array ;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

