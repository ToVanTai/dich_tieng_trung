let input = {};
let inputResult = ;
function traverseObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      traverseObject(obj[key]);
    } else {
      let key1 = obj[key];
      let value1 = input[key1];
      obj[key] = value1;
    }
  }
}