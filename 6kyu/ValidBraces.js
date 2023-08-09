function validBraces(braces) {
    let queue = [];
    for (const brace of braces) {
        if (brace === '(' || brace === '{' || brace === '[') {
            queue.push(brace);
        }
        else {
            if (brace === ')' && queue.at(-1) === '(') {
                queue.pop();
            } else if (brace === '}' && queue.at(-1) === '{') {
                queue.pop();
            } else if (brace === ']' && queue.at(-1) === '[') {
                queue.pop();
            } else {
                return false;
            }
        }
    }

    return queue.length === 0;
}

// Test
console.log(validBraces("()[]{}"));
console.log(validBraces("([{}])"));
console.log(validBraces("[(])"));
console.log(validBraces("[({})](]"));