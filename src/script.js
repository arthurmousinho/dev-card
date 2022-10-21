const nameInput = document.querySelector("#user")
nameInput.addEventListener("input", () => {
    
    const cardName = document.querySelector(".developer-name")


    if (nameInput.value.length === 0) {
        cardName.innerText = "YOUR NAME"
    }

    else {
        cardName.innerText = nameInput.value
    }
})



const descriptionInput = document.querySelector("#description")
descriptionInput.addEventListener("input" , () => {
    const descriptionCard = document.querySelector("p")

    if (descriptionInput.value.length === 0) {
        descriptionCard.innerText = "description of your job"
    }

    else {
        descriptionCard.innerText = descriptionInput.value
    }
})



const githubInput = document.querySelector("#github")
githubInput.addEventListener("input" , () => {
    const githubCard = document.querySelector(".github-card")

    githubCard.setAttribute("href" , githubInput.value)
})



const linkedinInput = document.querySelector("#linkedin")
linkedinInput.addEventListener("input" , () => {
    const linkedinCard = document.querySelector(".linkedin-card")

    linkedinCard.setAttribute("href" , linkedinInput.value)
})