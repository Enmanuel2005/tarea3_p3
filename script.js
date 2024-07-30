function sum(...numbers) {
    const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    console.log(result);

    return result;
}

sum(5, 19);          
sum(1, 2, 3, 4, 5);