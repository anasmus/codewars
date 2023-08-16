function isPrime(number) {
    if (number <= 1) return false;
    const range = Math.sqrt(number);
    for (let i = 2; i <= range; i++) {
        if (number % i == 0) return false;
    }
    return true;
}

function getPrimes(start, finish) {
    if (finish < start) {
        let temp = start;
        start = finish;
        finish = temp;
    }
    const primes = [];
    for (let num = start; num <= finish; num++) {
        if (isPrime(num)) {
            primes.push(num);
        }
    }
    return primes;
}