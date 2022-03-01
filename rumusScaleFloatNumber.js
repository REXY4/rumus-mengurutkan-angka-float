const listNumberDecimal = (iset) => {
    //value one adalah angka di depan koma
    let valueOne = [];
    for(let i = 0 ; i <= iset;i++){
            valueOne[i] = `${i}`
    }
    //value two adalah angka di belakang koma
    const isOne = valueOne.slice(1, valueOne.length)
    const valueTwo = [];
    for(let i = 0; i < 10;i++){
        valueTwo[i] = i
    } 
    const mapingValueOne = isOne.map((valOne, index)=>{
       return valueTwo.map((valTwo)=>{
            let val =  valOne+"."+valTwo
            return val
        })
    });
    const convertVertString = mapingValueOne.toLocaleString();
    const array = convertVertString.split(",");
    return array.slice(1, array.length);
};
// input number
console.log(listNumberDecimal(30))