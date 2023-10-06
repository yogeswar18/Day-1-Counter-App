
// const add=document.querySelector(".add");
// const resetCount=document.querySelector(".reset");
// const sub=document.querySelector(".sub");
const count=document.querySelector(".count");
const buttons=document.querySelector(".buttons");

//Using Event Delegation technique by targeting parent div//
buttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    else if(e.target.classList.contains("sub")){
        count.innerHTML--;
        setColor();
    }
    else if(e.target.classList.contains("reset")){
        count.innerHTML=0;
        setColor();
    }

})

function setColor(){
    if(count.innerHTML==0){
        count.style.color="white";
    }
    else if(count.innerHTML>0){
        count.style.color="greenyellow";
    }
    else{
        count.style.color="red";
    }
}
//Targeting Each Element Separately-Not the Best Approach//

// add.addEventListener("click",()=>{
//     count.innerHTML++;
// })

// resetCount.addEventListener("click",()=>{
//     count.innerHTML=0;
// })

// sub.addEventListener("click",()=>{
//     count.innerHTML--;
// })