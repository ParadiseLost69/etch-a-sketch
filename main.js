//grid box
const gridBox = document.querySelector(".grid-box")


//Grid Creator (I want to put 16x16 and 32x32)


function rowCreator (number){
    for (let i = number; i > 0; i--) {
        box = document.createElement("div");
        box.className = "box " + "box" + i;
        gridBox.appendChild(box)
        
        for (let j = number; j > 0; j--) {
            column = document.createElement("div");
            column.className = "box " + "column" + j;
            column.addEventListener("mouseover", function (e) {
                e.target.style.backgroundColor = "black"
            
            })
            column.addEventListener("click",function (e) {
                e.target.style.backgroundColor = "white"
            }
            )
            

            box.appendChild(column)
            }


    }

}



function colorChanger (){


}

// creates rows
rowCreator(16);


////coloring function



// reset function
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", function(){
    const boxes = Array.from(document.getElementsByClassName("box"));
    boxes.forEach(box => {
        box.remove();
    })
    rowCreator(16)
}

)

    
function clearBoxes(){
    gridPixels = gridBox.querySelectorAll("div");
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = "white")
}







//grid
