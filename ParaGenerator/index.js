// get input as number of words from user
const input = document.getElementById("numOfwords");
// get container box from html
const container = document.querySelector(".container");

// this is num of words as empty for now
let numOfWords;


// this function generate random word according to n value
const generateWord = (n)=>{
    // empty string var
    let text ="";
    // letter string
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // run a loop upto n value and generate random word
    for(let i=0; i<n; i++){

       const random = (Math.random()*(letters.length-1)).toFixed(0);
                                        // 25
       text+=letters[random]; //    add this letter in the string
    }
    return text; //return the text
}

// console.log(generateWord(200));


// this function generate random paragraph using the helps of generateWord function
const generatePara = ()=>{
    // i take numOfWords first and covert it string to Number
    numOfWords = Number(input.value);
    // now i create a paragraph Element
    const para = document.createElement("p");
    // create a empty string varible data
    let data = "";
    // now i iterate a loop from 0 to numOfWords
    for(let i=0; i<numOfWords; i++){
        // then i generate a randomNumber
        const randomNumber = ((Math.random()*15).toFixed(0));
        // i passed randomNumber value as a argument of generateWord function and convert it to lowercase
        data+=generateWord(randomNumber).toLowerCase();
        // afetr generateWord now i creating a space
        data+= " ";
    }
    // add this data value inside para Element
    para.innerText=data;
    // set className of para Element
    para.setAttribute("class","paras");
    // lastly append this para inside container div
    container.append(para);
}


// this function remove paragraph
const removePara = ()=>{
    // get the paragraph using querySelector
    const para = document.querySelector("p");
    // remove the para
    para.remove();
}