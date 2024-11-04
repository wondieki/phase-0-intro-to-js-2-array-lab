let cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
    cats.push("Ralph");
}
function  destructivelyPrependCat(){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(){
    let copyOfCats=[...cats, 'Broom']
    return copyOfCats;
}
function prependCat(){
   var newCats=['Arnold', ...cats]
    return newCats;
}
function removeLastCat(){
    let copyOfNewCats=cats.slice(0,-1)
    return copyOfNewCats;
}
function removeFirstCat(){
    var newCatsString=cats.slice(1)
    return newCatsString;
}