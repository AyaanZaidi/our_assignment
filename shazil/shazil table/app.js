
const touchMe = () => {
    let val = document.getElementById("textValue")
    let end = document.getElementById("endValue")
    let textResult = document.getElementById("textResult")
    rander(val.value, end.value)
}

const rander = (val, end) => {
    for (let i = 1; i <= end; i++) {
        let div = document.createElement("div")
        let text = document.createTextNode(`${val} x ${i} = ${val * i}`)
        div.appendChild(text)
        textResult.appendChild(div)
    }


}