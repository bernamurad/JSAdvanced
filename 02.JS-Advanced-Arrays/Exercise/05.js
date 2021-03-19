function solve(input) {

    let biggest = input[0];
    let result = [];

    input.map(x => {
        if (x >= biggest) {
            result.push(x);
            biggest = x;
        }
    })

    return result.join('\n');
}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));