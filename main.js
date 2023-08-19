const tiles = document.querySelector(".tiles");
const colNum = document.querySelector("#columnNum")
const rowNum = document.querySelector("#rowNum")
const button = document.querySelector('#executeNum')
//const colorChoice = document.querySelector(".color")

let row = 0
let col = 0

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


//const randomColors = generateRandomColorArray(numberOfColors);



function createTile(amt1,amt2){

    for(let i = 0 ; i < amt1; i++){
        for(let j = 0; j < amt2; j++){
        const tile = document.createElement('div'); 
        tile.classList.add('tile');
        tile.addEventListener("mouseover",function(){
            const randomColors = getRandomColor()
            tile.style.backgroundColor = randomColors;
            tile.classList.replace('tile','color');
        });
        tiles.appendChild(tile);}
       
    }
   
}

function removeTile() {
    while (tiles.firstChild) {
        tiles.removeChild(tiles.firstChild);
    }
}


button.addEventListener("click",function(){
    removeTile()
    row = rowNum.value;
    col = colNum.value;
    createTile(col,row);
    tiles.style.gridTemplateColumns = `repeat(${col},20px)`;
})


