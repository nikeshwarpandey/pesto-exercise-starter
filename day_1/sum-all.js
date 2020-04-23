function sumAll(a, b) {
    let sum = 0;
    if (a > b) {
        for (i = b; i <= b; i++) {
            sum += i;
        }
    } else {
        for (i = a; i <= b; i++) {
            sum += i;
        }
    }
    return sum;
}

console.log(sumAll(1, 10)); 