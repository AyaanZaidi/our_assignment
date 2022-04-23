
const username_input = document.getElementById("username_input")
const password_input = document.getElementById("password_input")
const welcome_div = document.getElementById("welcome_div")
const password = "admin"

const login = () => {
    if (password_input.value === password) {
        localStorage.setItem("username", username_input.value)
        location.href = "welcome.html"
    } else (alert("bhai app password sahi do"))
}
const render = () => {
    if (welcome_div && localStorage.getItem("username")) {
        let h2 = document.createElement("h2")
        h2.innerText = `welcome ${localStorage.getItem("username") || ""}`
        welcome_div.appendChild(h2)
    }
}
render()