// Explain what is going on here.

var p = new Promise(function(res, rej){
    setTimeout(() => res(1), 1000)
})

p.then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then(add1) //--> new Promise
    .then((v) => console.log(v)) //--> new Promise

function add1(v){ return v+1 }

the p.then starts off with 1 and then every second adds 1
since it adds 1 + 1 + 1 + 1 + 1, the result is 5
the 5 gets returned when the sum is complete
