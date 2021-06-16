let wait = (func, delay) => {
    let timeOutId;
        
    return (...args) => {
        if(timeOutId) clearTimeout(timeOutId)
        timeOutId = setTimeout(()=> {
            func.apply(null, args);
        }, delay)
    }
}