function solve(arr) {
    let n = 1;
    let result = [];

    arr.forEach(el => {

        el === 'add' ? result.push(n) : result.pop();
        n++;
    })

    return result.length === 0 ? 'Empty' : result.join('\n');
}

console.log(solve(['add',
    'add',
    'add',
    'add']
));