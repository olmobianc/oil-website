//FUNCTION TO FADE IN PREVENTIVO SECTION
document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("scroll", function() {
        const preventivoSection = document.querySelector("#preventivo");
        //get the preventivo section height
        const preventivoHeight = preventivoSection.offsetTop;
        //get the scrolling height
        const windowHeight = window.innerHeight + window.scrollY;
        //when user reaches the preventivo height
        if(windowHeight >= preventivoHeight) {
            preventivoSection.classList.add("preventivo-comes-up")
        }
    })
})

//FUNCTION TO OPEN MENU ON MOBILE VIEW
const burger = document.querySelector("#burger")
const firstLine = document.querySelector("#first-line")
const secondLine = document.querySelector("#second-line")
const thirdLine = document.querySelector("#third-line")
const hiddenMenu = document.querySelector(".is-hidden")
document.addEventListener("DOMContentLoaded", () => {
    burger.addEventListener("click", () => {
        if(hiddenMenu.classList.contains("is-hidden")) {
            hiddenMenu.classList.remove("is-hidden")
            firstLine.classList.add("rotate-right")
            secondLine.classList.add("fade-out")
            thirdLine.classList.add("rotate-left")
        } else {
            hiddenMenu.classList.add("is-hidden")
            firstLine.classList.remove("rotate-right")
            secondLine.classList.remove("fade-out")
            thirdLine.classList.remove("rotate-left")
        }
    })
})