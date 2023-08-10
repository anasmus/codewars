function scramble(str1, str2) {
    freq1 = findFrequency(str1);
    freq2 = findFrequency(str2);
    for (const char in freq2) {
        if (!freq1[char]) return false;
        if (freq1[char] < freq2[char]) return false;
    }
    return true;
}

function findFrequency(string) {
    const table = {};
    for (const char of string) {
        table[char] = table[char] ? table[char] + 1 : 1;
    }
    return table;
}

// Test
console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))  
