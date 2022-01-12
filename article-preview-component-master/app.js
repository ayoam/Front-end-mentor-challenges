let shareBtn = document.querySelector(".share-btn");
let socialPreview = document.querySelector(".social-share-preview");
let footerContainer = document.querySelector(".footer-container");

shareBtn.addEventListener("click",(e)=>{
    if(e.currentTarget.classList.contains("active-share-btn")){
        e.currentTarget.classList.remove("active-share-btn");
        socialPreview.style.visibility="hidden";
        footerContainer.classList.add("footer-height");
    }else{
        e.currentTarget.classList.add("active-share-btn");
        socialPreview.style.visibility="visible";
        footerContainer.classList.remove("footer-height");
    }
})