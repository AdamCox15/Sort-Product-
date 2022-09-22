// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.

// For sorting the index starts at 1, NOT at 0!

// The sorting has to be ascending.

// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5

// Product of value and index:

// 23 => 23 * 1 = 23 -> Output-Pos 4

// 2 => 2 * 2 = 4 -> Output-Pos 1

// 3 => 3 * 3 = 9 -> Output-Pos 2

// 4 => 4 * 4 = 16 -> Output-Pos 3

// 5 => 5 * 5 = 25 -> Output-Pos 5

// Output: 2, 3, 4, 23, 5


function sort(input) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
    newArr.push(input[i] * (i + 1)); //multiplying
  
     }
  
    //bubble  adjusted using our original input
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 1; j < newArr.length; j++) {
        if (newArr[j - 1] > newArr[i]) {
          temp = newArr[j - 1];
          temp2 = input [j-1];
          newArr[j - 1] = newArr[i];
          input[j-1] = input[i];
          newArr[i] = temp;
          input[i]=temp2;
        }
      }
  
    }
    return input;
  }
  
  // take original array, and put a 1 at the front to change the index
  // then multiply this array by the number at it's index
  
  console.log(sort([23, 2, 3, 4, 5]))

//_________________________________________________________________
  

function sortByValueAndIndex(array) {
    let totals = []
    array.forEach((e, i) => {
      let totalObj = {
        total: e*(i+1),
        i: i
      }
      totals.push(totalObj)
    })
    totals.sort((a, b) => a.total - b.total)
    let newArr = []
    totals.forEach(e => newArr.push(array[e.i]))
    return newArr
  }
