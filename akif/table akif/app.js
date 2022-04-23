



const hit = () => {
    let table = document.getElementById("table")
    let end = document.getElementById("endValue")
    let textResult = document.getElementById("textResult")

    render(table.value , end.value)
}

const render = (table , end) => {
    for(let i = 1 ; i <= end ; i++){
        let div = document.createElement("div")
        let text = document.createTextNode(`${table} x ${i} = ${table*i}`)
        div.appendChild(text)
        textResult.appendChild(div)

    }
}