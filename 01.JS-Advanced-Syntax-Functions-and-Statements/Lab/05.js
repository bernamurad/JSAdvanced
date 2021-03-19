function circleArea(x) {
    let type = typeof (x);
    let result;

    if (type === 'number') {
        result = Math.pow(x, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);



