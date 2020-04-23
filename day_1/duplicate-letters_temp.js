// const str = "afewreociwddwjej";
//var text = "test".split("");
function checkDuplicate(str) {
    var text = str.split("");
    let duplicate = text.some(function (v, i, a) {
        return a.lastIndexOf(v) != i;
    });
    if (duplicate) {
        return true
    } else {
        return false
    }
}

console.log(checkDuplicate("abcdef")); // false
console.log(checkDuplicate("abcabcef")); // true

// function findRepeat(str) {
//     const arr = str.split('');
//     const hash = new Map();
//     const result = [];
//     // If repeat the value is false, if no repeat the value is true
//     for (let i = 0; i < arr.length; i++) {
//         if (hash.get(arr[i]) === undefined) {
//             hash.set(arr[i], true);
//         } else {
//             const value = hash.get(arr[i]);
//             if (value) {
//                 hash.set(arr[i], !value);
//             }
//         }
//     }
//     hash.forEach((v, k) => {
//         if (!v)
//             result.push(k);
//     });
//     return result;
// }
// console.log(findRepeat(str));