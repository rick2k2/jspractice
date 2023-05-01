// const a = true;
// console.log(a);
// const type = typeof(a);
// console.log(`value is ${a} and type is ${type}`);



// *******************************************
// Type conversion number -- string
// let Num = 10;
// let convNumToStr = String(Num);
// console.log(Num);
// console.log(`Value is ${Num} and type is ${typeof(Num)}`);
// console.log(convNumToStr);
// console.log(`Value is ${convNumToStr} and type is ${typeof(convNumToStr)}`);



// *******************************************
// Type conversion string -- number
// let str = "10";
// let convStrToNum = Number(str);
// console.log(str);
// console.log(`Value is ${str} and type is ${typeof(str)}`);
// console.log(convStrToNum);
// console.log(`Value is ${convStrToNum} and type is ${typeof(convStrToNum)}`);


// **********************************************
// let num = 152;
// console.log(num);
// console.log(typeof(num));
// console.log(num.toString());
// console.log(typeof(num.toString()));
// **********************************************



// *******************************************
// ONE IMPORTANT THING YOU MUST REMEBER 
// IN CONSOLE GOOGLE CHROME
// NUMBER SHOW VILOET COLOR
// STRING SHOW WHITE COLOR 
// STRING CONVERT PROCESS -->> ["" / String(var) / var.toString()]





// String
// let  s = 'My name is Ricka';
// console.log(s);
// console.log(s[0]);
// console.log(s[1]);
// console.log(s[2]);
// console.log(s[3]);
// console.log(s[4]);
// console.log(s[5]);
// console.log(s[6]);
// console.log(s[7]);
// console.log(s[8]);
// console.log(s[9]);
// console.log(s[10]);
// console.log(s[11]);
// console.log(s[12]);
// console.log(s[13]);
// console.log(s[14]);
// // some important string method
// console.log(s.length); //total string length but it is [0-14 == 15]
// console.log(s.charAt(14)); //14 index e ki value ache
// console.log(s.indexOf('n')); //n koto number index a ache
// // kono character repeating time thakle seta 1st index detect hoi
// // tochkon seta check korar akta function holo this
// console.log(s.lastIndexOf('a')); 
// console.log(s.length); 
// console.log(s.charAt(s.length - 5)); //16 - 5 = 11
// console.log(s.endsWith("Ricka")); // last e character ki diye sesh hoyeche
// console.log(s.includes("name")); //check puro string e ahy character ache ki nah
// console.log(s.includes(" is ")); //check puro string e ahy character ache ki nah
// console.log(s.startsWith('M')); //start e character ki diye start hoyeche
// console.log(s.substring(3,7)); //2 parameter index start,last index (start index include last index exclude)
// console.log(s.slice(3,7)); //start index include last index exclude
// // it is simmilar to substring but not same
// console.log(s.split(" "));// ata amader string k split kore array baniye dei this is case sensitive
// console.log(s.replace("is","was")); // it replace our string with replace value
// console.log(s.replace("Ricka","Rick Saha"));
// console.log(s.toLowerCase());//make whole string lower case
// console.log(s.toUpperCase());//make whole string upper case
// console.log(s.toLocaleUpperCase());//upper localally
// console.log(s.toLocaleLowerCase()); //lower localally
// console.log(s.substr(0,4)); // it's give a new string starting from 0(start) to 4(len) and baki all character remove hoye jabe
// console.log(s.substring(3,4));
// console.log(s.substr(3,2));



// this is called js single line comment 
// Only for you Comment : 0 1 2 3 4 5 6


// this is called js multi line comment 
/*
Only 
for
you
Comment : 0 1 2 3 4 5 6
*/



// string index starts with 0
// if string length end and i want to access this length then it's undefined



// Dom manipulation basics
let name = "My name is Rick saha";
let heading = document.getElementById("myHeading");
// console.log(name);
// console.log(heading);
heading.innerText = name;
heading.style.color = "white";
heading.style.backgroundColor ="blue";
heading.style.padding = "5vmax 8vmax";
heading.style.textAlign = "center";
heading.style.fontFamily = "cursive";
heading.style.margin = "0px";
