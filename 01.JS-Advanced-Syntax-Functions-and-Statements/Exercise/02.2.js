function solve(a, b) {
    // определяме по-малкото
    let small = Math.min(a, b);
    let large = Math.max(a, b);
    let remainder = 1;

    do {
        // цикъл: търсим остатък от деление между голямото и малкото
        // ако имаме остатък, той е новото малко, голямото е старото малко
        // ако нямаме остатък, приключваме
        remainder = large % small;
        large = small;
        small = remainder;
    } while (remainder !== 0);

    // отпечатваме резултата
    console.log(large);
}

solve(15, 5);
solve(2154, 458);