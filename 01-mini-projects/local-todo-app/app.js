const form = document.getElementById("form")
const addBTN = document.getElementById("addBTN")
const add = document.getElementById("ADD")

const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")

const b4 = document.querySelector(".e1")

let list = JSON.parse(localStorage.getItem("tasks")) || []

const count = document.querySelector(".e0")

function listsize(){
    if (list.length === 1 || list.length === 0 ){
        count.innerHTML = `${list.length} item left`
    }else{
        count.innerHTML = `${list.length} items left`
    }
}

b3.addEventListener("click", () => {
    document.querySelector("#tasklist").innerHTML=""
    list.forEach((element)=>{
        if (element.isCompleted === true){
            displayTask(element)
        }
    })
})

b2.addEventListener("click", () => {
    document.querySelector("#tasklist").innerHTML=""
    list.forEach((element)=>{
        if (element.isCompleted === false){
            displayTask(element)
        }
    })
})

b1.addEventListener("click", () => {
    document.querySelector("#tasklist").innerHTML=""
    list.forEach((element)=>{
        displayTask(element)
    })
})

b4.addEventListener("click", () => {
    for (let i = list.length-1; i >=0; i--) {
        if (list[i].isCompleted) {
            list.splice(i, 1);
        }
    }
    localStorage.setItem("tasks", JSON.stringify(list));

    document.querySelector("#tasklist").innerHTML = "";

    list.forEach((element) => {
        displayTask(element);
    });

    listsize()
});


list.forEach((element)=>{
        displayTask(element)
    })

function displayTask(element){
    const li = document.createElement("li")
    li.className = "task"

    const input = document.createElement("input")
    input.type = "checkbox"
    input.className = "todo-checkbox"
    input.checked = element.isCompleted

    input.addEventListener("click", ()=>{
        element.isCompleted = input.checked

        localStorage.setItem("tasks", JSON.stringify(list))
    })

    const span  = document.createElement("span")
    span.className = "todo-text"
    span.textContent = element.title

    const button = document.createElement("button")
    button.className = "dlt-btn"
    button.textContent = "x"

    li.appendChild(input)
    li.appendChild(span)
    li.appendChild(button)

    button.addEventListener("click", () => {
        li.remove();

        for (let i = 0; i < list.length; i++) {
            if (list[i].title === element.title) {
                list.splice(i, 1);
                break;
            }
        }

        localStorage.setItem("tasks",JSON.stringify(list))

        listsize()
    });

    document.querySelector("#tasklist").appendChild(li)
}


add.addEventListener("click", (e) =>{
    let task = {
        "title" : addBTN.value,
        "isCompleted" : false
    }

    if (task.title !== ""){
        list.push(task)
    }

    let strTask = JSON.stringify(list)

    localStorage.setItem("tasks",strTask)
})

listsize()