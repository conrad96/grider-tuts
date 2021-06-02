let httpMock = (url) => 
{
    return new Promise((resolve, reject)=> {
        let pages = {
            '/users': [
                {'firstname': 'conrad', 'lastname': 'mugisha', 'address': 'London'}],
                '/about': {'info': 'This is a httpp mock object'}            
        }

        const data = pages[url];

        if(data)
        {
            resolve(data);
        }else {
            reject({status: 404})
        }
    })
}

httpMock('/none').then((response)=> {
    console.log(response);
}).catch((error)=> {
    console.log(error);
})