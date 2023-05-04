const input = document.querySelector("input")
const btn = document.querySelector(".add-btn")
const ul = document.querySelector(".list")
const err = document.querySelector("h4")

btn.addEventListener("click",() =>{
    if (input.value === "") {
        err.innerHTML = "404"
    } else{
        err.innerHTML = ""
        ul.innerHTML += `<li class= "list group-item my-1 d-flex justify-content-between align-items-center">
 <span><input type = "checkbox" class="check">
${input.value}</span>
<button class="del-btn btn btn-danger">delete</button></li>`
        input.value = ""
    }

})
ul.addEventListener("click",(e) => {
    if (e.target.classList.contains("del-btn")){       
        e.target.parentNode.remove()
    }  if(e.target.classList.contains("check")) {
        if (e.target.parentNode.classList.contains("line")) {
            e.target.parentNode.classList.remove("line")
        }else{
            e.target.parentNode.classList.add("line")
        }
    }
})


