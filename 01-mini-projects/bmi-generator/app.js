const calc =  document.getElementById("calc")
const result = document.getElementById("result")
// console.log(calc)

result.style.marginTop = "30px"
result.style.marginLeft = "210px"
result.style.color = "white"
result.style.fontWeight = "700"

calc.addEventListener("click", function(e){
    let height = document.getElementById("h")
    let weight = document.getElementById("w")

    let intheight = parseFloat(height.value)
    let intweight = parseFloat(weight.value)

    const h3 = document.createElement("h3")

    if (Number.isNaN(intheight)|| Number.isNaN(intweight)){

        result.innerText = "WRONG INPUT"

        return
    }

    let h = (intheight/100)
    let BMI = (intweight/(h*h))
    let roundBMI = Math.round(BMI *10)/10

    let cond = ""
    if (roundBMI <18.6){
        cond+= "Under Weight"
    }else if (roundBMI <= 24.9) {
         cond+= "in Normal Range"
    }else {
         cond+= "Over Weight"
    }

    result.innerText = `Your BMI is ${roundBMI}. You are ${cond}.`

})