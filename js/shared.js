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
const hiddenMenu = document.querySelector(".is-hidden")
document.addEventListener("DOMContentLoaded", () => {
    burger.addEventListener("click", () => {
        hiddenMenu.classList.remove("is-hidden")
    })
})