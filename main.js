// one line ?: ternery. 
// function decomposition is helper functions



// the goal is to sort an array
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr.shift();
  let left = quickSort(arr.filter(ele => ele < pivot ));
  let right = quickSort(arr.filter(ele => ele > pivot));

  return left.concat([pivot], right);

}

let array = [8,5,7,3,2,11,1,12];
console.log(quickSort(array))


function quickSort() {


}

let dog1 = {
  breed: "golden retriever",
  name: 'Fido',
  age: '7',
  gender: 'non-binary'
}

console.log(dog1.name);
console.log(dog1['name']);


for(let key in dog1) {
  console.log(key);
  console.log(obj[key]);
}