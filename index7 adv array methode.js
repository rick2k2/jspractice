// traditional function declaration
// const myfunc = function (a,b){
//     console.log(a+b);
// }

// myfunc(1,5);


// Basic array function
// const arr = [];
// console.log(arr);
// for(let i= 0;i<5;i++){
//     arr.push(i);
// }
// console.log(arr);
// const rmelem = arr.pop();
// console.log(rmelem);
// console.log(arr);
// arr.reverse();
// console.log(arr);
// const elem = arr.shift();
// console.log(arr,`remove element is:${elem}`);
// arr.unshift(10);
// console.log(arr);
// console.log(arr.length);

// some string basic function
// const name = "My name is Rick saha";
// console.log(name.length);
// console.log(name.substring(0,15));
// console.log(name.substr(3,7));



// arrow function
// const myfunc = (a,b)=>{
//     console.log(a*b);
// }

// myfunc(2,4);


// advance array function
// const arr =[41,4,6,8,10,12,41,21,22,25];
// console.log(arr);



// FIND METHOD
// ******************
// find return a single value which is greater than any condition value in our case this is value>4
// const result = arr.find((value,index)=>{
//     if(value > 4){
//        return value;
//     }
// });
// console.log(result);
// Find return a single value so when we need list of number as a filter then we used filter method





// FILTER method
// **********************
// it gives us Element from an array
// const result = arr.filter((value,index)=>{
//     if(value>10){
//         return value;
//     }
// })
// console.log(result);




// EVERY FUNCTION
// *********************
// it checks all Element greater than 4 it gives us boolean value true/false
// const result = arr.every((value,index)=>{
//     return value>4;
// })
// console.log(result);



// Some method
// ***************************
// const result = arr.some((value,index)=>{
//     return value>6;
// })
// console.log(result);



// FOR OF LOOP
// ***************
// this loop is specially for array
// for(const value of arr){
//     console.log(value);
// }


// for of loop e value increase korte pari but original array remain unchanged
// for(let value of arr){
//     value+=10;
//     console.log(value);
// }
// console.log(arr);



// foreach Loop
// ******************
// let totalSum = 0;
// arr.forEach((value,index)=>{
//     totalSum+=value;
//     console.log(value);
// })
// console.log(totalSum);



// arr.forEach((value,index)=>{
//     value+=20;
//     console.log(value);
// });
// console.log(arr);

// Array er advance methode guli original array k always remain unchanged rakhe and original array er akta copy baniye tar upor element e effect apply hoi.



// ata kono new array return kore nah kintu amra jodi new array chai after changing it's element we used map function
// const result = arr.forEach((value,index)=>{
//     return value+20;
// })

// console.log(result);
// o/p:- undefined

// MAP function
// so we use map function here
// const result = arr.map((value,index)=>{
//     return value+20;
// })

// console.log(result);
// kintu map function o original array te kono change kore nah.



// reduce method
// ************************
// reduce iteration startig index = 1
// example:
arr = [1,2,3,4,5];
// prev = 1
// value = 2
// after first iteration prev value = 3
// value = 3 i.e  = 6 then repeat the same step so prev = 6 and value =4 then prev =10 and value=5
// final prev = 15 and this is answer
// const result = arr.reduce((prev,value,index)=>{
//     return prev+value;
// })
// console.log(result);

// difference b/w map and reduce
// find(single element) == Filter(element array)
// reduce(single element) == MAP(element array)

// let total=0;
// const result = arr.map((value,index)=>{
//    return(total+=value);
// })
// console.log(total);
// console.log(result)


const result = arr.reduce((prev,value,index)=>{
//    return(prev+=value);
   return (prev+=value);
})
// console.log(total);
console.log(result)





