const val = document.getElementById("submit")
const p = document.getElementById("final")
const rem = document.getElementById("remaining")
const prev = document.getElementById("g0")

const randNum = Math.floor(Math.random()*100)+1

let flag = false
let finalflag = false

let limit = 10

rem.innerHTML = limit
prev.style.width = "18px"
prev.style.height = "18px"
let v1 = 0

let list = []

val.addEventListener("click", (e) =>{
    let num = document.getElementById("guess")

    let intnum = Number.parseInt(num.value)

    if (Number.isNaN(intnum) || intnum > 100 || intnum <1){
        p.innerHTML = "Invalid Number Guess an Actual number"
        return
    }

    if (intnum < randNum){
        p.innerHTML = "Number is Higher"
    }else if (intnum > randNum){
        p.innerHTML = "Number is Lower"
    }

    list.forEach((e) =>{
        if (e == intnum){
            p.innerHTML = `Input another number ${e} is already in the list.`
            flag = true
        }else{
            flag = false
        }
    })

    if (list.length <10 && flag == false && finalflag == false){
        if (intnum == 100){
            v1 += 28
        }else if (intnum > 9){
            v1 += 20
        }else{
            v1 += 12
        }
        
        list.push(intnum)
        limit-=1
        prev.style.width = v1 + "px"
    }

    console.log(randNum)

    if (randNum == intnum){
        p.innerHTML = `You Guessed The Currect number ${randNum}`
        finalflag = true
    }

    if (limit == 0 ){
        p.innerHTML = `Game Over. Random Number was ${randNum}`
        finalflag = true
    }

    
    rem.innerHTML = limit
    prev.innerHTML = list
    
})
