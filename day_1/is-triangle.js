
function isTriangle(sideA,sideB,sideC){
    let sumofAB=sideA+sideB;
    let sumofBC=sideB+sideC;
    let sumofCA=sideC+sideA;
    if(sumofAB > sideC && sumofBC > sideA && sumofCA > sideB){
        return true
    }else{
        return false
    }
}

console.log(isTriangle(2,3,4));  //true
console.log(isTriangle(2,5,1));  //false