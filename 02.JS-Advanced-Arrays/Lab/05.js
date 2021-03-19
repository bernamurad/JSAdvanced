function solve(params) {
    let result = [];
    for (let i = 0; i < params.length; i++) {
        if (i % 2 !== 0) {

            result.push(params[i])
        }
    }
    let nnew = result.map(x => x * 2);
    console.log(nnew.reverse().join(" "));
}

solve([10, 15, 20, 25])

//from the presentation:
//
//function solve(arr) {
//    return arr.filter((a, i) => i % 2 !== 0)
//        .map(x => x * 2)
//        .reverse()
//        .join(' ')
//}