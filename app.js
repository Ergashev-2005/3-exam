let elForm = document.querySelector(".form")
let elNomiInput = document.querySelector(".taom-nomi")
let elNarxiInput = document.querySelector(".taom-narxi")
let elRasmiInput = document.querySelector(".taom-rasmini-linki")
let elOshpaziInput = document.querySelector(".taom-oshpazi")
let elRestoranInput = document.querySelector(".taom-tayyorlagan-restorani")
let elUl = document.querySelector(".ul")



let users = []
elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let newUser = {
        nomi: elNomiInput.value,
        narxi: elNarxiInput.value,
        rasmi: elRasmiInput.value,
        oshpazi: elOshpaziInput.value,
        restoran: elRestoranInput.value 
    }

    users.push(newUser)
    mapUsers(users)
 
})

function mapUsers (usersArr) {
    elUl.textContent = null
    usersArr.forEach((element, index,) => {
        let UserLi = document.createElement("li")
        let UserNomi = document.createElement("p")
        let UserNarxi = document.createElement("p")
        let UserRasmi = document.createElement("img")
        let UserOshpazi = document.createElement("p")
        let UserRestorani = document.createElement("p")

        UserLi.setAttribute("class", "box")
        UserNomi.setAttribute("class", "nomi")

        UserNomi.textContent = element.nomi
        UserNarxi.textContent = element.narxi
        UserRasmi.setAttribute("src", element.img)
        UserOshpazi.textContent = element.oshpazi
        UserRestorani.textContent = element.restorani



        elUl.appendChild(UserLi)
        UserLi.appendChild(UserNomi)
        UserLi.appendChild(UserNarxi)
        UserLi.appendChild(UserRasmi)
        UserLi.appendChild(UserOshpazi)
        UserLi.appendChild(UserRestorani)

    })
}