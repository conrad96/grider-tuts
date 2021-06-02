let httpMock = (url) => 
{
    return new Promise((resolve, reject)=> {
        const pages = {
            '/users'        : [
                { id: 1, username: 'Bilbo' },
                { id: 5, username: 'Esmerelda' }
            ],
            '/users/1'      : {
                id        : 1,
                username  : 'Bilbo',
                upvotes   : 360,
                city      : 'Lisbon',
                topPostId : 454321
            },
            '/users/5'      : {
                id       : 5,
                username : 'Esmerelda',
                upvotes  : 571,
                city     : 'Honolulu'
            },
            '/posts/454321' : {
                id    : 454321,
                title :
                    'Ladies & Gentlemen, may I introduce my pet pig, Hamlet'
            },
            '/about'        : 'This is the about page!'
        };

        const data = pages[url];

        if(data)
        {
            resolve(data);
        }else {
            reject({status: 404})
        }
    })
}

// httpMock('/users').then((response)=> {
//     let id = response[0].id;
    
//     httpMock(`/users/${id}`).then((response2)=> {
//         let postID = response2.topPostId;
        
//         httpMock(`/posts/${postID}`).then((response3)=> {
//             console.log(response3.title);
//         })
//     })
// }).catch((error)=> {
//     console.log(error);
// })

httpMock('/users').then((response)=> {
    let id = response[0].id;
    return httpMock(`/users/${id}`)
}).
then((response)=> {
    let postID = response.topPostId
    return httpMock(`/posts/${postID}`)
}). 
then((response)=> {
    console.log(response.title);
}).
catch((error)=> {
    console.log(error);
})