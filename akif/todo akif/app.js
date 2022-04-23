const temp = localStorage.getItem("todoList")
const todoList = (temp && JSON.parse(temp)) || []
let input = document.getElementById("textInput")
let ol = document.getElementById("orderList")


const render  = () => {
    ol.innerHTML = ""
    if(todoList.length){
        for(let i = 0 ; i < todoList.length; i++){
            let li = document.createElement("li")
            li.setAttribute("id" , i)
            li.innerText = todoList[i]
            let editBtn = document.createElement("button")
            editBtn.setAttribute("onClick"  , `edit(${i})`)
            editBtn.setAttribute("class" , "editBtn")
            editBtn.innerText = "edit"
            let delBtn = document.createElement("button")
            delBtn.setAttribute("onClick"  , `delete1(${i})`)
            delBtn.setAttribute("class" , "delBtn")
            delBtn.innerText = "delete"
            // let canBtn = document.createElement("button")
            // canBtn.setAttribute("onClick"  , `cancel(${i})`)
            // canBtn.innerText = "cancel"
            li.appendChild(editBtn)
            li.appendChild(delBtn)
            ol.appendChild(li)
            input.value = ""                        
        }
    }
}

render()


const submit = () => {
    if(input && input.value){
        todoList.push(input.value)
        saveInLocalStorage(todoList)
        render()
    }
}


const deleteAll = () => {
    todoList.length = 0
    saveInLocalStorage(todoList)
    render()
}

const delete1 = (id) => {
    todoList.splice(id, 1)
    saveInLocalStorage(todoList)
    render()
    
}   


const edit = (id) =>{
    let input = document.createElement("input")
    input.setAttribute("id" , `newInput${id}`)
    input.setAttribute("class" , "editInput")
    input.value = todoList[id]
    let btn = document.createElement("button")
    btn.setAttribute("onClick", `update(${id})`)
    btn.setAttribute("class" , "update")
    btn.innerText = "update"
    let list = document.getElementById(id)
    list.innerHTML = ""
    list.appendChild(input)
    list.appendChild(btn)
}

const update = (h) => {
    let input = document.getElementById(`newInput${h}`)
    todoList[h] = input.value
    saveInLocalStorage(todoList)
    render()
}


const saveInLocalStorage = (data) =>{
 localStorage.setItem("todoList" , JSON.stringify(data))
}