function longestConsec(strarr, k) {
    let largestWord = '';
    for (let i = 0; i < strarr.length - k + 1; i++) {
        let word = '';
        for (let j = 0; j < k; j++) {
            word += strarr[i + j];
        }
        largestWord = largestWord.length < word.length ? word : largestWord;
    }
    return largestWord;
}

// Test
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'], 2));