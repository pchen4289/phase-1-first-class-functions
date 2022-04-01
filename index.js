function receivesAFunction(callback){
console.log(callback());
}
function returnsANamedFunction(){
    console.log("anything")
    console.log(receivesAFunction.name);
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {}
}
returnsAnAnonymousFunction();