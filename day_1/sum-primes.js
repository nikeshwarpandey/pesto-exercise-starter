function sumPrimes(num) {

    let prime = [];

    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) {
            prime.push(i);
        }
    }

    function isPrime(num) {
        for (var j = 2; j < num; j++) {
            if (num % j === 0) {
                return false;
            }
        }
        return true;
    }

    return prime.reduce((sum, num) => sum + num);

}



console.log(sumPrimes(20));