function solve(input) {
    let arr = [...input];
    let first = Number(arr.shift());
    let last = Number(input.pop());
    console.log(first + last);

}

solve(['20', '30', '40'])
solve(['5', '10'])
solve(['10'])