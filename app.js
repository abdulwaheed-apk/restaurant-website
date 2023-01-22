let aboutLink = document.getElementById("about-link")
let popularLink = document.getElementById("popular-link")
let menuLink = document.getElementById("menu-link")
let contactLink = document.getElementById("contact-link")
let hamIcon = document.getElementsByClassName("hamburger-icon")
let toTopBtn = document.getElementsByClassName("fa-arrow-up")

let headerMenu =document.getElementsByClassName("header-menu")

let about = document.getElementById("about-section")
let popular = document.getElementById("popular-items")
let menuSection = document.getElementById("menu-items")
let contact = document.getElementById("footer")

aboutLink.addEventListener("click", function () {
    about.scrollIntoView(true)

})

popularLink.addEventListener("click", function() {
    popular.scrollIntoView(true)
})
menuLink.addEventListener("click", function() {
    menuSection.scrollIntoView(true)
})
contactLink.addEventListener("click", function() {
    contact.scrollIntoView(true)
})
hamIcon.addEventListener("click", function()  {
    headerMenu.style.display = "inline-block";
    
})
toTopBtn.addEventListener("click", () => {
    scrollToTop(true);
})

