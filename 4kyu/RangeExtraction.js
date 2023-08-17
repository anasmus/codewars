function solution(list) {
    let str = (list[1] - list[0] === 1) ? `${list[0]}` : `${list[0]},`;
    let count = 0;
    for (let i = 1; i < list.length; i++) {
        if (list[i] - list[i - 1] === 1 && list[i] - list[i + 1] === -1) {
            count++;
            continue;
        }
        if (list[i] - list[i - 1] === 1) {
            str += (count === 0) ? `,${list[i]},` : `-${list[i]},`;
            count = 0;
        } else if (list[i] - list[i + 1] === -1) {
            str += `${list[i]}`;
        } else {
            str += `${list[i]},`;
            count = 0;
        }
    }
    str = str.substring(0, str.length - 1);
    return str;
}

// Test
console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));