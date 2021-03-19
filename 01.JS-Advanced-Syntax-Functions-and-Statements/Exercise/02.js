function greatestCommonDivisor(a, b) {
    // определяме по-малкото число
    const smallerNum = Math.min(a, b);
    let gcd = 1; //greatesCommonDivisor
    // изпълняваме цикъл от 1 до по-малкото число
    for (let i = 1; i <= smallerNum; i++) {
        // вътре в цикъла проверяваме дали двете числя се делят без остатък
        // ако да, запазваме числото
        if (a % i == 0 && b % i == 0) {
            gcd = i;
        }
    }

    // отпечатваме числото
    console.log(gcd)
}

greatestCommonDivisor(15, 5);