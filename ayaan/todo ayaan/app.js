
let temp = localStorage.getItem("todoList")
let todoList = JSON.parse(temp)  || []
let input = document.getElementById("textinput")
let ol = document.getElementById("orderList")

const render = () => {
    ol.innerHTML = ""
    if(todoList.length){
        for(let i = 0; i < todoList.length; i++){
            let li = document.createElement("li")
            li.setAttribute("id" , i)
            li.innerText = todoList[i]
            let editBtn = document.createElement("button")
            editBtn.setAttribute("onClick"  , `edit(${i})`)
            editBtn.setAttribute("class","edtstyl")
            editBtn.innerText = "edit"
            let delBtn = document.createElement("button")
            delBtn.setAttribute("onClick"  , `delete1(${i})`)
            delBtn.setAttribute("class","delstyl")
            delBtn.innerText = "delete"
            li.appendChild(editBtn)
            li.appendChild(delBtn)
            ol.appendChild(li)
            input.value = ""   
        }
    }
}
render()


const submit = () =>{
    if(input && input.value){
        todoList.push(input.value)
        saveInLocalStorage(todoList)
        render()
    }
}

const deleteAll = () =>{
    todoList.length = 0
    saveInLocalStorage(todoList)
    render()
}

const delete1 = (id) =>{
    todoList.splice(id,1)
    saveInLocalStorage(todoList)
    render()
}

const edit = (id) =>{
    let input = document.createElement("input")
    input.setAttribute("id",`newInput${id}`)
    input.value = todoList[id]
    let btn = document.createElement("button")
    btn.setAttribute("onClick",`update(${id})`)
    btn.setAttribute("class","updating")
    btn.innerText = "update"
    let list = document.getElementById(id)
    list.innerHTML = ""
    list.appendChild(input)
    list.appendChild(btn)
}


const update = (k) =>{
    let input = document.getElementById(`newInput${k}`)
    todoList[k] = input.value
    saveInLocalStorage(todoList)
    
    render()
}

const saveInLocalStorage = (data) =>{
    const storage = localStorage.setItem("todoList" , JSON.stringify(data))
   }