//function solve(input) {
//
//    let step = Number(input.pop());
//
//    for (let i = 0; i < input.length; i += step) {
//        console.log(input[i]);
//    }
//}

function solve(input) {
    let num = Number(input.pop());
    return input.filter((x, i) => i % num === 0).join('\n')
}

console.log(solve(['5',
    '20',
    '31',
    '4',
    '20',
    '2']
))