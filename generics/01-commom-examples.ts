const numbers = new Array<number>();


numbers.push(10);

// error because generics
//numbers.push("Hello world")


const promise = new Promise<string>((resolve, reject)=> {
    resolve("Success");

});


promise.then(val => {
    
})