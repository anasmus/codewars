function count(string) {
    const table = {};
    for (const char of string) {
        table[char] = table[char] ? table[char] + 1 : 1;
    }
    return table;
}

// Test
console.log(count('Hello World'));