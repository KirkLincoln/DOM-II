// Your code goes here
document.addEventListener("load", () => {
    document.readyState === "complete" ? null : alert("document did not load correctly");
});

const navLink = document.querySelector(".nav");
navLink.addEventListener("mouseover", event => {
    event.target.style.color = "red";
});
navLink.addEventListener("mouseout", event => {
    event.target.style.color = "";
})

document.querySelector(".content-section").addEventListener("mouseover", event => {
    event.target.style.background = "orange";
})
document.querySelector(".content-section").addEventListener("mouseout", event => {
    event.target.style.background = "white";
})



document.addEventListener("mouseover", event => {
    event.target.localName === "img" ? event.target.style.width = "200%" : null;
});

document.addEventListener("mouseout", event => {
    event.target.localName === "img" ? event.target.style.width = "" : null;
});