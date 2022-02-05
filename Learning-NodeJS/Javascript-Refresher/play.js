const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 5000)
    })
    return promise
}

// async code (callback function)
setTimeout(() => {
    console.log('Action is complete after 2s')
    fetchData().then(text => {
        console.log(text)
    })
}, 2000);

// sync code
console.log('Action is complete immediately')