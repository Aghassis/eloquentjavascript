/*
The == operator compares objects by identity. But sometimes, you would prefer 
to compare the values of their actual properties.

Write a function, deepEqual, that takes two values and returns true only if
they are the same value or are objects with the same properties whose values 
are also equal when compared with a recursive call to deepEqual.

To find out whether to compare two things by identity (use the === operator 
for that) or by looking at their properties, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: by a historical accident,
typeof null also produces "object".
*/


function deepEqual(x, y) {
  if (x === y) return true;
  
  if ( x == null || y == null || typeof x != "object" || typeof y != "object")
    return false;
  
  var pieceObjectInA = 0;
  
  for (var pieceObject in x) {
    console.log("x - " + pieceObject);
    pieceObjectInA += 1;
  }
  
  var pieceObjectInB = 0;
  
  for (var pieceObject in y) {
    console.log("y - " + pieceObject);
    pieceObjectInB += 1;
    if (!(pieceObject in x) || !deepEqual(x[pieceObject], y[pieceObject]))
      return false;
  }
  console.log(pieceObjectInA);
  console.log(pieceObjectInB);
  
  return pieceObjectInA == pieceObjectInB;
}
console.log(5,5);
console.log(5,7);
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {here: {is: "an"}, object: 2}, object: 2}));
// → false