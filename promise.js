const checkNumber = new Promise((resolve, reject)=> {
    let random = Math.floor(Math.random() * 100);

    if(random > 5)
    {
        resolve('Greater than 5: '+ random);
    }else{
        reject('Less than 5: '+ random);
    }
});

checkNumber.then((message)=> {
    console.log(message);
}).catch((error)=> {
    console.log(error);
})