
const receivesAFunction = (greet =()=> console.log("Hello stranger")) => {
 greet()
}

const returnsANamedFunction  = () => {    
    const greet = () => console.log("Hello stranger")
    return greet
}



const returnsAnAnonymousFunction  = () => {
    return function(){console.log("Hello stranger")}
}


returnsANamedFunction()

