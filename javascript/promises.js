

// Mock functions simulating data fetching with different delays
function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 1");
        }, 1000); // resolves after 1 second
    });
}

function fetchData2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from API 2");
        }, 500); // resolves after 0.5 seconds
    });
}

function fetchData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error from API 3");
        }, 1500); // rejects after 1.5 seconds
    });
}

const promises = [fetchData1(), fetchData2(), fetchData3()];




// Promise.race

Promise.race(promises)
    .then((result) => console.log("Resolved with:", result))
    .catch((error) => console.error("Rejected with:", error));





// Promise.any

Promise.any(promises)
.then((result)=> console.log("Resolved while : ", result))
.catch((error)=> console.error("Rejected with : " , error));



// Promise.allSettled
Promise.allSettled(promises)
.then((result)=> console.log("Resolved while : ", result))
.catch((error)=> console.error("Rejected with : " , error));



// Promise.all
Promise.all(promises)
.then((result)=> console.log("Resolved while : ", result))
.catch((error)=> console.error("Rejected with : " , error));

