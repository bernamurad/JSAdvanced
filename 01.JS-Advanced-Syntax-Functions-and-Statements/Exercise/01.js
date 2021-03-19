function fruits(fruit, weightInGrams, pricePerKg) {
    // преобразуваме мерни единици
    const weigthInKilos = weightInGrams / 1000;
    // пресмятаме стойност
    const total = weigthInKilos * pricePerKg;
    // форматираме и отпечатваме резултат
    console.log(`I need $${total.toFixed(2)} to buy ${weigthInKilos.toFixed(2)} kilograms ${fruit}.`)
}

fruits('orange', 2500, 1.80);