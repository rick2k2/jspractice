const arr = [2,4,6,8,7,10,12];
console.log(arr);
console.log(`Length is: ${arr.length}`);

// const result = arr.find((v,e)=>{
//     if(v>5){
//        return v;
//     }
//     // else{
//     //     console.log(`Value ${v} is not exist`);
//     // }
// })
// console.log(result);


// const result = arr.filter((v,e)=>{
//     if(v>5){
//         return v;
//     }
// })
// console.log(result);


const result = arr.every((value,index)=>{
    return value%2===0;
})
console.log(result);


// const result = arr.forEach((v,e)=>{
//     console.log(v)
// });


// for(v of arr){
//     console.log(v)
// };



// const r = arr.map((v,e)=>{
//    return v;
// })
// console.log(r)




// const r = arr.reduce((p,e,i)=>{
//     return p+e;
// })
// console.log(r);



