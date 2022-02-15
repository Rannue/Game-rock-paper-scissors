function computerPlay() {
    const mas = ['камень', 'ножницы', 'бумага'];
    const index = Math.floor(Math.random() * 3);
    return mas[index];
}

// const comp = computerPlay();
// const player = prompt('введите элемент');
const k = 'камень';
const n = 'ножницы';
const b = 'бумага';

let winCount = 0;
let loseCount = 0;

function playRound(player, comp) {
    if (player === comp) {
        alert('одинаково');
    }

    if (player === k && comp === n) {
        alert('You ' + 'win!! ' + k + ' beats ' + n);
        winCount++;
    } else if (comp === k && player === b) {
        alert('You ' + 'win!! ' + b + ' beats ' + k);
        winCount++;
    } else if (player === n && comp === b) {
        alert('You ' + 'win!! ' + n + ' beats ' + b);
        winCount++;
    }

    else if (comp === k && player === n) {
        alert('You ' + 'lose... ' + k + ' beats ' + n);
        loseCount++;
    } else if (player === k && comp === b) {
        alert('You ' + 'lose... ' + b + ' beats ' + k);
        loseCount++;
    } else if (comp === n && player === b) {
        alert('You lose... ' + n + ' beats ' + b);
        loseCount++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const comp = computerPlay();
        const player = prompt('введите элемент');
        playRound(player, comp);
    }

    console.log(winCount, loseCount);
}

// playRound(player, comp)
game()
