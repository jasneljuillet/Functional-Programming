

const prepareTea = () => 'greenTea';

const getTea = (numberOfTea) => {
    const cupsTea = [];

    for( let cups = 0; cups < numberOfTea; cups++) {
        const tea = prepareTea();
        cupsTea.push(tea);
    }

    return cupsTea;
}

const commandTea = getTea(2);

console.log(commandTea); //[ 'greenTea', 'greenTea' ]