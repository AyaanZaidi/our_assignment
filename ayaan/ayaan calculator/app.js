function getNumber(num){
    var result = document.getElementById("number")
    result.value += num

}


function result(){
    var result = document.getElementById("number")
    result.value = eval(result.value)
}


function clean(){
    var result = document.getElementById("number")
    result.value = ""
}
