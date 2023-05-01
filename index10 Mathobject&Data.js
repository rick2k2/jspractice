//gives nearest greater integer after .4
// const r = Math.round(4.4); 
// console.log(r);


// gives lower integer
// const r =  Math.floor(4.7);
// console.log(r);


// it gives greater value after .1
// const r =  Math.ceil(4.1);
// console.log(r);


// it gives up always value after .
// const r = Math.trunc(4.8);
// console.log(r);


// it gives us number sign + or - or 0
// const r = Math.sign(0);
// const r = Math.sign(2);
// const r = Math.sign(-2);
// console.log(r);


// it gives us power value
// const r = Math.pow(2,3);
// console.log(r);


// it gives us square root value
// const r = Math.sqrt(625);
// console.log(r);


// it gives us absolute value + or - not matter
// const r = Math.abs(5);
// console.log(r);

// where we used abs
// const  func1 = (a,b) =>{
//     const ans = Math.abs(a-b);
//     return ans;
// }

// console.log(func1(2,5));
// console.log(func1(5,2));


// it gives us sin value it takes value in radian we can pass degree value also
// convert in degree degree*3.14/180


// const pi = Math.PI;
// const degree = 90*pi/180;
// const r = Math.sin(degree);
// console.log(r);


// const pi = Math.PI;
// const degree = 60*pi/180;
// const r =  Math.cos(degree);
// console.log(r);


// const pi = Math.PI;
// const degree = 60*pi/180;
// const r =  Math.tan(degree);
// console.log(r);


// it gives us maximum value between many value
// const maxvalue = Math.max(4,5,9,7,8,20);
// console.log(maxvalue);


// it gives us minimum value between many value
// const minvalue = Math.min(4,5,52,30,2,0,5);
// console.log(minvalue);


// random number
// const r = (Math.random()*15).toFixed(0);
// const r = Math.floor(Math.random()*15+1);
// console.log(r);


// log2 return the log value
// const r = Math.log2(64);
// const r = Math.log10(100);
// console.log(r);



// Date object

// blank parameter
// const a = new Date(); 

//pass all parameter
// year,month,date,hour,min,sec,milisec
// const a = new Date(2012,11,12,12,12,12,12); 

//pass one parameter this is treated as mili second
// const a = new Date(2012);

//pass parameter as a string
// const a = new Date("Thu Jan 01 1970 05:30:0");
// console.log(a);

// const a = new Date();
// const a = new Date("2023-04-01");
const a = new Date("2023/04/01");
// console.log(a);
// console.log(a.getTime());
// console.log(a.getHours());
// console.log(a.getMinutes());
// console.log(a.getSeconds());
// console.log(a.getMilliseconds());
// console.log(a.getFullYear());
// console.log(a.getMonth());
// console.log(a.getDay());
// console.log(a.toUTCString());

a.setFullYear(2054);
a.setMonth(11);
console.log(a);

