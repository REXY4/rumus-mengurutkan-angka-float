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

//output
/*
[
    '1.1',  '1.2',  '1.3',  '1.4',  '1.5',  '1.6',  '1.7',  '1.8',
    '1.9',  '2.0',  '2.1',  '2.2',  '2.3',  '2.4',  '2.5',  '2.6',
    '2.7',  '2.8',  '2.9',  '3.0',  '3.1',  '3.2',  '3.3',  '3.4',
    '3.5',  '3.6',  '3.7',  '3.8',  '3.9',  '4.0',  '4.1',  '4.2',
    '4.3',  '4.4',  '4.5',  '4.6',  '4.7',  '4.8',  '4.9',  '5.0',
    '5.1',  '5.2',  '5.3',  '5.4',  '5.5',  '5.6',  '5.7',  '5.8',
    '5.9',  '6.0',  '6.1',  '6.2',  '6.3',  '6.4',  '6.5',  '6.6',
    '6.7',  '6.8',  '6.9',  '7.0',  '7.1',  '7.2',  '7.3',  '7.4',
    '7.5',  '7.6',  '7.7',  '7.8',  '7.9',  '8.0',  '8.1',  '8.2',
    '8.3',  '8.4',  '8.5',  '8.6',  '8.7',  '8.8',  '8.9',  '9.0',
    '9.1',  '9.2',  '9.3',  '9.4',  '9.5',  '9.6',  '9.7',  '9.8',
    '9.9',  '10.0', '10.1', '10.2', '10.3', '10.4', '10.5', '10.6',
    '10.7', '10.8', '10.9', '11.0',
    ... 199 more items
  ]

  */