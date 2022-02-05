const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 5000)
}

// async code (callback function)
setTimeout(() => {
    console.log('Action is complete after 2s')
    fetchData(text => {
        console.log(text);
    })
}, 2000);

// sync code
console.log('Action is complete immediately')