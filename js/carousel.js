document.addEventListener("DOMContentLoaded", () => {
    const rightArrow = document.querySelector(".fa-angle-right")
    const leftArrow = document.querySelector(".fa-angle-left")
    const carouselImages = document.querySelectorAll(".carousel-image")

    let counter = 0

    leftArrow.style.color = "grey"
    leftArrow.style.cursor = "default"

    //MOBILE
    if(window.innerWidth <= 970) {
        for(let i = 1; i < carouselImages.length; i++) {
            carouselImages[i].classList.add("invisible")
        }
    }
    
    //RIGHT CLICK
    rightArrow.addEventListener("click", () => {

        leftArrow.style.color = "#7f6459"
        leftArrow.style.cursor = "pointer"

        //MOBILE
        if(window.innerWidth <= 970) {
            counter++
            console.log(counter)
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
        //DESKTOP    
        } else {
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
        }
    })

    //LEFT CLICK
    leftArrow.addEventListener("click", () => {
        //MOBILE
        if(window.innerWidth <= 970) {
            if(counter != 0) {
                carouselImages[counter].classList.add("invisible")
                const lastElement = document.querySelectorAll(".carousel-image")[carouselImages.length - 1]
                lastElement.classList.remove("invisible")
                document.querySelector("#test").insertBefore(lastElement, document.querySelector("#test").firstChild);
                counter--
                console.log(counter)
            } else {
                leftArrow.style.color = "grey"
                leftArrow.style.cursor = "default"
            }
            
        }
    })

})