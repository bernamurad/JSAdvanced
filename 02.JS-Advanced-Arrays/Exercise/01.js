function solve(input) {
    let workArr = [...input];
    let sign = workArr.pop();

    console.log(workArr.join(sign));

}

solve(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-']
)