function sumIntervals(intervals) {
    intervals.sort(sortIntervals);
    const newInter = intervals.reduce(mergeIntervals, [])
        .reduce(sumRanges, 0);
    console.log(newInter);
}

function sortIntervals(first, second) {
    return first[0] - second[0];
}

function mergeIntervals(intervals, current) {
    if (intervals.length === 0) return [current];
    const last = intervals.at(-1);
    if (current[0] <= last[1] && current[0] >= last[0]) {
        if (current[1] > last[1]) {
            intervals.pop();
            intervals.push([last[0], current[1]])
        }
    } else {
        intervals.push(current);
    }
    return intervals;
}

function sumRanges(total, current) {
    const interval = current[1] - current[0];
    return total + interval;
}

Test
sumIntervals([[1, 4], [7, 10], [3, 5]]);
