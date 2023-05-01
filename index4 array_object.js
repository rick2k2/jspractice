// Arrays
// Number array
// let arr = [12,43,44,10];;
// console.log(typeof(arr));
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// // string array
// let arr2 = ['rick','abhi','liza','ankan'];
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[1]);
// console.log(arr2[2]);
// console.log(arr2[3]);
// console.log(arr2[4]);


// // mixed array
// let arr3 = [10,'rick',[1,2],['raju','anu']];
// console.log(arr3);
// console.log(arr3[0]);
// console.log(arr3[1]);
// console.log(arr3[2]);
// console.log(arr3[3]);
// console.log(arr3[4]);
// console.log(arr3.length);

// // empty array
// let arr4 = [];
// console.log(arr4);
// arr4[0]=52;
// arr4[1]=22;
// arr4[2]=25;
// arr4[3]=58;
// arr4[4]="ranu";
// console.log(arr4);


// // make a array using array constructor
// let arr5 = new Array(5);
// console.log(arr5);

// let arr6 =  new Array(48,52,63);
// console.log(arr6);



// let arr7 = [];
// console.log(arr7);
// arr7.push(7); //add value to end of the array
// console.log(arr7);
// arr7.push(8);
// console.log(arr7);
// arr7.push(17);
// console.log(arr7);
// arr7.push(11);
// console.log(arr7);
// arr7.push(22);
// console.log(arr7);
// arr7.pop(); //remove from end of the array
// console.log(arr7);
// arr7.pop(); //remove from end of the array
// console.log(arr7);
// arr7.shift(); //remove from front of the array
// console.log(arr7);
// arr7.shift(); //remove from front of the array
// console.log(arr7);
// arr7.shift(); //remove from front of the array
// console.log(arr7);
// arr7.push(55);
// arr7.push(51);
// arr7.push(58);
// console.log(arr7);
// arr7.unshift(99);//add element in the front of the array
// arr7.unshift(101);//add element in the front of the array
// console.log(arr7);
// console.log(arr7);
// console.log(arr7.pop());
// console.log(arr7);
// console.log(arr7.length)
// ****splice method******
// arr7.splice(1,2);// ** important splice method Delete element of a large array from startindex and how many element
// ****splice method******
// console.log(arr7);
// arr7.reverse();
// console.log(arr7);
// arr7[0] = 1500;
// console.log(arr7);



// let arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);
// let newArr = arr.slice(1,6); //return a new copy of this array 
// console.log(arr);
// console.log(newArr);
// const ans = arr.includes(4);
// console.log(ans);



// let arr = [];
// let length = 10;
// for (let i = 0; i < length; i++){
//     arr.push(i);
// }
// console.log(arr);


// const arr er value change korte pari array methode er help e kintu direct value chage korte pari nah
// const arr= [];
// arr.push(20);
// arr.push(20);
// arr.push(20);
// console.log(arr);





const myobj1 = {
    "name":"rick",
    "surname":"saha",
    "income": 20000000,
    male:true
}
const myobj2 = {
    1:"rick",
    2:"saha",
    3: 20000000,
    4:true
}

console.log(myobj1);
console.log(myobj2);
console.log(myobj2[1]);
console.log(myobj1.surname);
console.log(myobj1.male);
console.log(myobj1.income);
console.log(myobj1.name);
myobj1.income = 54441221;
console.log(myobj1.income);

// add new value after creating a object
myobj1.data = "Beta";
myobj1.date = "unknown";
console.log(myobj1.date);
console.log(myobj1.data);

// In js array is a object