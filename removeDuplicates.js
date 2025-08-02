// Remove Duplicates function that filters out duplicate values from an array.
function removeDuplicates(arr) {
  return arr.reduce((unique, current) => {
    return unique.includes(current) ? unique : [...unique, current];
  }, []);
}

const input = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(input));
