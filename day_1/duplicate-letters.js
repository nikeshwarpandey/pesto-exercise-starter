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
