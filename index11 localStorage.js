// get data from input
document.addEventListener("DOMContentLoaded", function(){

    const input = document.getElementById("myInput");
    const btn = document.getElementById("myBtn");
    const deletebtn = document.getElementById("delete");

    const btnClick = ()=>{
        // alert(input.value);
        // sessionStorage.setItem("key1",input.value);

        // localStorage.setItem("key1",input.value);

        // pass static object and convert object to string
        localStorage.setItem("key1",JSON.stringify({name:"Rick",surname:"saha"}));
    }
    btn.addEventListener("click",btnClick);
    deletebtn.addEventListener("click",()=>{
    // console.log(sessionStorage.key(0));
    // console.log(sessionStorage.length);
    // sessionStorage.removeItem("key1");
    // sessionStorage.clear();
    
    // localStorage.removeItem("key1");
    localStorage.clear();
    });
    // if(sessionStorage.getItem("key1")){
    //     alert(sessionStorage.getItem("key1"));
    // }
    if(localStorage.getItem("key1")){
        // alert(localStorage.getItem("key1"));
        console.log(localStorage.getItem("key1"));
        console.log(JSON.parse(localStorage.getItem("key1")));
    }
    // console.log(sessionStorage.getItem("key1"));
})

// local Storage
// this local scope is locally all tab when we reopen this url agian then scope set to previous data and it is not loss everytime.
// Data Hold capacity :10mb

// session Storage
// this session scope is only one tab when we reopen this url agian then scope set to null data loss forever.
// Data Hold capacity :5mb