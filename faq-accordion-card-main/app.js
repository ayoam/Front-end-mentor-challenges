//arrow button function
[...document.querySelectorAll(".ques-title-container img")].forEach(elt=>{
    elt.addEventListener("click",(e)=>{
        if(!elt.classList.contains("arrowUp")){
            elt.parentElement.parentElement.children[1].style.display="block";
            elt.classList.add("arrowUp");
            elt.previousElementSibling.className="BoldTQuesTitle"
        }else{
            closeQues(elt)
        }
        closeAllDDQ(elt);
    })
})

function closeAllDDQ(elt){
    [...document.querySelectorAll(".ques-title-container img")].map((x)=>{
        if(elt!=x){
            closeQues(x)
        }
    });
}

function closeQues(q){
    q.parentElement.parentElement.children[1].style.display="none";
    q.classList.remove("arrowUp");
    q.previousElementSibling.className="";
}
