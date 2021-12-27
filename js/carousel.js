document.addEventListener("DOMContentLoaded", () => {
    const rightArrow = document.querySelector(".fa-angle-right")
    const carouselImages = document.querySelectorAll(".carousel-image")

    let counter = 0
    rightArrow.addEventListener("click", () => {
        counter++
        for(let i = counter - 1; i < counter; i++) {
            if(i >= carouselImages.length) {
                rightArrow.style.color = "grey"
                rightArrow.style.cursor = "default"
                break
            }
            //appned first image that will be hidden to the end of the carousel
            document.querySelector("#test").appendChild(carouselImages[i])
            //hide first image
            carouselImages[i].style.opacity = "0"
            //show first hidden elem by removing the class invisible
            document.querySelector(".invisible").classList.remove("invisible")
            //hide first image by adding the class invisible
            carouselImages[i].classList.add("invisible")
            //bring back opacity to 1
            carouselImages[i].style.opacity = "1"
        }

    })
})
