
const prepareGreenTea = 'greenTea';
const prepareBlackTea = 'blackTea';

const getTea = (prepare, numberOfTea) => {

    const tea = [];

    for(let cups = 0; cups < numberOfTea; cups++) {
        tea.push(prepare);
    }

    return tea;
}

const greenTea = getTea(prepareGreenTea, 3);
const blackTea = getTea(prepareBlackTea, 3);
