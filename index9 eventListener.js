document.addEventListener("DOMContentLoaded",()=>{
    const box = document.getElementById("box");
    const btn = document.getElementById("mybtn");
    const heading = document.getElementById("heading");
    const para = document.getElementById("para");
    const input = document.querySelector("input");

    btn.addEventListener('click',()=>{
        box.classList.add("classForDiv");
        heading.style.backgroundColor = "blue";
        heading.style.padding = "40px";
        heading.style.color = "#fff";
    });
    btn.addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        btn.style.backgroundColor="purple";
    });
    btn.addEventListener("dblclick",(e)=>{
        e.preventDefault();
        btn.style.backgroundColor="red";
    });
    box.addEventListener("click",(e)=>{
        heading.style.display="none";
        para.innerText="Clicked on BOX1 oops!";
        para.style.backgroundColor = "goldenrod";
        para.style.color = "#3f3f3f";
    })
    box.addEventListener("mouseleave",(e)=>{
        heading.style.display="block";
        para.innerText="Message!";
        para.style.backgroundColor = "#fff";
        para.style.color = "rgb(61, 60, 60)";
    })
    function func1(e){
        e.preventDefault();
        const valuecopy = `Copied Successful`;
        para.innerText = valuecopy;
        para.style.backgroundColor = "green";
        para.style.color = "#fff";
    }
    function func2(e){
        e.preventDefault();
       const value = e.target.value;
        para.innerText = value;
        para.style.backgroundColor = "yellow";
        para.style.color = "#000";
    }
    input.addEventListener("copy",func1);
    input.addEventListener("change",func2);
    addEventListener("contextmenu",(e)=>{
        e.preventDefault();
        para.innerText="Right Click Facility is Disabled Due to Security reason";
        para.style.backgroundColor = "red";
        para.style.color = "#fff";
    });
    addEventListener("dblclick",(e)=>{
        e.preventDefault();
        document.body.style.backgroundColor="#333";
    });
    addEventListener("click",(e)=>{
        e.preventDefault();
        document.body.style.backgroundColor="#fff";
        btn.style.backgroundColor="blue";
    });
});