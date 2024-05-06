

// its equivalent by another below 
// invoke by @SealClass()
// export function SealClass(): ClassDecorator {

//     return (constructor: Function) => {
//         Object.seal(constructor);
//         Object.seal(constructor.prototype);
//     }

// }


//This type of decorator is invoke without parentheses 
//invoke by @SealClass instead of @SealClass()
//only can use this definition when decorator has no args
export function SealClass(constructor: Function) {

    Object.seal(constructor);
    Object.seal(constructor.prototype);

}