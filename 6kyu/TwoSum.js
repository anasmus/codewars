function twoSum(numbers, target) {
    for (let [indexOne, one] of numbers.entries()) {
        for (let [indexTwo, two] of numbers.entries()) {
            if (one + two === target && indexOne !== indexTwo) return [indexOne, indexTwo];
        }
    }
    return 0;
}

// Test
console.log(twoSum([1, 2, 3], 4));