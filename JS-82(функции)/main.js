// const users = ['Alex', 'Ann', 'John', 'Max']

// function checkForCopyItem(array, item) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return `Hello ${item}`
//         }
//     }
// }

// console.log(checkForCopyItem(users, 'Alex'))


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const result = 
checkForCopyItem(numbers);

function checkForCopyItem(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 10) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(result)