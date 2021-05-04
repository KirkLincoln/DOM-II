// Your code goes here
document.addEventListener("load", () => {
    document.readyState === "complete" ? null : alert("document did not load correctly");
});

document.addEventListener("keydown", () => {
    document.getElementsByClassName("content-section")[0].style.background = "orange";
});

document.addEventListener("keyup", event => {
    document.getElementsByClassName("content-section")[0].style.background = "white";
})

document.addEventListener("mouseover", event => {
    event.target.localName === "img" ? event.target.style.width = "100%" : null;
});

document.addEventListener("mouseout", event => {
    event.target.localName === "img" ? event.target.style.width = "" : null;
});

document.addEventListener("scroll", event => {
    event.target.body.style.lineHeight = 2;
});

window.addEventListener("resize", () => {
    document.body.style.width = "400px";
});

document.addEventListener("dblclick", event => {
    event.target.style.marginLeft = "10%";
});

document.addEventListener("keydown", event => {
    event.key === "Control" ? document.addEventListener("mouseover", mEvent => {
        mEvent.target.style.marginLeft === "10%" ? 
        mEvent.target.style.marginLeft = "" :
        null;
    }) :
    null
});

document.addEventListener("click", event => {
    const signUp = [...event.target.classList].filter(x => x === "btn")
    console.log(signUp)
    signUp.length > 0 ? 
    (event.target.style.color === "red" ? 
     event.target.style.color =   ""    : 
     event.target.style.color =   "red")
    : null;
})



