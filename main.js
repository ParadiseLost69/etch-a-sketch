//grid box
const gridBox = document.querySelector(".grid-box")


//Grid Creator (I want to put 16x16 and 32x32)


function rowCreator (number){
    for (let i = number; i > 0; i--) {
        box = document.createElement("div");
        box.className = "box " + "box" + i;
        box.textContent = ""
        gridBox.appendChild(box)
        
        for (let j = number; j > 0; j--) {
            column = document.createElement("div");
            column.className = "box " + "column" + j;
            column.textContent = ""
            box.appendChild(column)
            }


    }

}
function columnCreator(numberTwo) {
            for (let i = numberTwo; i > 0; i--) {
                column = document.createElement("div")
                column.className = "box" + "column" + i
                box.textContent = "hi"
                box.appendChild(column)

            }
}

function colorChanger (){

}
rowCreator(12);





//grid
