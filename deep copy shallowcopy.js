const originalObject = { a: 1, b: { c: 2 } };
const shallowCopyObject = Object.assign({}, originalObject);
// aslo can use ...originalObject

shallowCopyObject.a = 99;
shallowCopyObject.b.c = 88;

console.log(originalObject);   // Output: { a: 1, b: { c: 88 } }
console.log(shallowCopyObject); // Output: { a: 99, b: { c: 88 } }



// deep copy json.parse(json.stringify)


