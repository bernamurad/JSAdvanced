function solve(input) {
    let newAr = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            newAr.push(input[i]);
        }
    }

    console.log(newAr.join(" "));
}

solve(['20', '30', '40'])