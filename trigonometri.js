/*rumus menggunakan method javascript 
Math.sin();
Math.cos();
Math.tan();

note : 
1.putaran lingkaran bulat= 360 derajat
    360 derajat =  2 pi ,
     = radian
    1 pi = 180 derajat
*/

// satuan putaran dalam derajat

const fungsiPutaranDalamDerajat = (param) => {
    //param adalah jumlah putaran
    const putaran = 360; //derajat
    const value =  param * 360;
    return  value + ' derajat' 
}
//console.log(fungsiPutaranDalamDerajat(2/3))

const mencariPidanDerajat = (pi) => {
    const satuDerajat = Math.round((Math.PI * 2) * 100) / 100; //=360
    const getParam = Math.round((pi * Math.PI)  * 100) / 100;
    const piToDerajatRadiant = 180 * pi;
    const putaranFromDerajat = satuDerajat / getParam;
    console.log(`${pi} pi sama dengan :`, getParam);
    console.log(`${pi} radiant sama dengan : `, piToDerajatRadiant, 'derajat');
    console.log(`${pi} pi sama dengan `, putaranFromDerajat, 'dari 360 derajat');
}

mencariPidanDerajat(0.5)

