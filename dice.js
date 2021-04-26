function rollDice()
{
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice()
{
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
}

throwDice();