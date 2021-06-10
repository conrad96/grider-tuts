function changeBodyColor(color, delay)
{
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// //sequential
// async function change()
// {
//     const c1 = await changeBodyColor('red', 2000);
//     const c2 = await changeBodyColor('green', 2000);
//     const c3 = await changeBodyColor('blue', 2000);
//     const c4 = await changeBodyColor('yellow', 2000);    
// }

//parallel
async function change()
{
    const c1 = changeBodyColor('red', 2000);
    const c2 = changeBodyColor('green', 2000);
    const c3 = changeBodyColor('blue', 2000);
    const c4 = changeBodyColor('yellow', 2000);    
    
    await c1;
    await c2;
    await c3;
    await c4;
}

change();