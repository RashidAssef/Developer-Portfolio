function color(col){
            const newcol = document.getElementById("fullbod")
            if (col === 1){
                newcol.style.backgroundColor = "gray"
            }else if (col === 2){
                newcol.style.backgroundColor = "white"
            }else if (col === 3){
                newcol.style.backgroundColor = "blue"
            }else if (col === 4){
                newcol.style.backgroundColor = "yellow"
            }

        }