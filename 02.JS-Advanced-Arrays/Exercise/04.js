function solve(input) {
    let amountOfRot = Number(input.pop());
    amountOfRot = amountOfRot % input.length; //za da ne pravim 10 puti ednakvo vurtene

    for (let i = 0; i < amountOfRot; i++) {
        let last = input.pop();
        input.unshift(last);
    }
    console.log(input.join(' '));
}

solve(['1',
    '2',
    '3',
    '4',
    '2']
)