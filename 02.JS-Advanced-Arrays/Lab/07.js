function biggestNum(input) {
    let res = [...input].flat();
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (const num of res) {
        if (num > maxNum) {
            maxNum = num;
        }
    }

    console.log(maxNum);

}

biggestNum([[20, 50, 10], [8, 33, 145]])