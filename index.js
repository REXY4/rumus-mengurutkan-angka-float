

// vertikal yang di ateh strip tms di kali beta
// klw untuk relay bertambah input menjadi total relay 
//untuk ka 1.1 x iset
//rumus t idmt di bawah
//rumus t int dari delay turun ke bawah apa bila ka < iset intantious mka hasilnya 0 jika lebih besar sejajarkan dengan Ka
//delay sama dengan naik ke atas atau x hasil wajib garis lurus

function gasSi(tms, iset){
    let tims = tms;
    let isets = iset;
    const b = 0.14;
    const gama = 1;
    const alfa = 0.02;
    const l = 0;
    const first = tims * b;
    //fisttotal adalag vertikal yang di atas trip
    const firstTotal = Math.round(first*1000)/1000
    const ifS = 1.1 * isets;
    const ifsTetps = Math.round(ifS*100)/100;
    const bagi = ifsTetps / isets;
    const setelahBagi = Math.round(bagi*100)/100;
    const pangkat = setelahBagi ** alfa;
    const kurangSatu = pangkat - 1;
    const terakirPangkat = Math.round(kurangSatu*10000)/10000; 
    const hasil = firstTotal / terakirPangkat;
    const totals = Math.round(hasil*100)/100;
    console.log(totals)
};

// console.log(gasSi(tms , isets));
gasSi( 0.3, 4 );

// function sumbuX(isset){
//     let koma = [];
//     let value = [];
//     let satu = [];
//     let dua = [];
//     let tiga = [];
//     let empat = [];
//     let lima = [];
//     let enam = [];
//     let tujuh = [];
//     let delapan = [];
//     let sembilan = [];
//     for(let i = 1;i <= 10 - 1;i++){
//         koma[i] = i;
//         value[i] = i;
//         satu[i] = `${1}.${i}`;
//         dua[i] = `${2}.${i}`;
//         tiga[i] = `${3}.${i}`;
//         empat[i] = `${4}.${i}`;
//         lima[i] = `${5}.${i}`;
//         enam[i] = `${6}.${i}`;
//         tujuh[i] = `${7}.${i}`;
//         delapan[i] = `${8}.${i}`;
//         sembilan[i] = `${9}.${i}`;
//     };
  
//     let nilai=[];
//     dua.push('2');
//     tiga.push('3');
//     empat.push('4');
//     lima.push('5');
//     enam.push('6');
//     tujuh.push('7');
//     delapan.push('8');
//     sembilan.push('9');
//     console.log(nilai)
// }

// sumbuX();



//sumbu Y
// misal iset 3
// 1,1 x 3 = 11
// 1,2 x 3 = 12
// -
// -1.9
// -5,= 55
// -
// -
// 10 x3 = 30
//mebntok di 10
//iset ocr max 50 iset

//B = 0.14
//L = gama = 1
//alfa = 0.02
//if = 1.1 iset
//ise = 1
//l = 0
//t = waktu

//if = 1.1 x isset,