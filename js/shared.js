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