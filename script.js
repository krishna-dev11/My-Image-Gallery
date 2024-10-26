
let count = document.querySelector(".count")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")

plus.addEventListener("click", ()=>{
    let a = parseInt(count.textContent);
    a+=1;
    count.textContent=a;   
})

minus.addEventListener("click", ()=>{
    let a = parseInt(count.textContent);
    a-=1;
    count.textContent=a;   
})