const num1 = 5;
const num2 = 10;


function addValues(){
    console.log(`the sum is: ${num1 + num2}`)
}

addValues()
// this func runs in app even if we just do require(..)
// even if require is not assigned to a var or somthng
// we didnt invoke func direct,but it runs thats a property
// so invoking import module invokes any function which is being executed/called in it auto
