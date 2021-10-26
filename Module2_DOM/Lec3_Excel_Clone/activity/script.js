let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let topLeftCell = document.querySelector(".top-left-cell");
let allCells=document.querySelector(".cell");
let addressInput = document.querySelector("#address");
let formulaInput = document.querySelector("#formula");
let lastSelectedCell;

cellsContentDiv.addEventListener("scroll" , function(e){
    let top = e.target.scrollTop;
    let left = e.target.scrollLeft;
    //console.log(top);
    topRow.style.top = top + "px";
    topLeftCell.style.top = top + "px";
    topLeftCell.style.left = left + "px";
    leftCol.style.left = left + "px";  
})

for(let i=0;i<allCells.length ;i++){
    allCells[i].addEventListener("click",function(e){
        let rowId=Number(e.target.getAttribute("rowid"));
        let colid = Number(e.target.getAttribute("colid"));
        let cellObject=db[rowid][colid];
        let address=String.fromCharCode(65+colId)+(rowId+1)+"";
        addressInput.value=address;
        formulaInpuut.value=cellObject.formula;
    })

    allCells[i].addEventListener("blur",function(e){
        let rowId=e.target.getAttribute("rowid");
        let colId= e.target.getAttribute("colid");
        let cellObject=db[rowId][colId];
        lastSelectedCell=e.target;
        let cellValue=e.target.textContent;
        if(cellObject.value==cellValue){
            return;
        }
        cellObject.value=cellValue;
    })
}

formulaInput.addEventListener("blur",function(e){
    let formula=e.target.value;
    if(formula){
        let {rowId,colId}=getRowIdColIdFromElement(lastSelectedCell);
        let cellObject=db[rowId][colId];
        let computedValue=solveFormula(formula,cellObject);
        cellObject.formula=formula;
        cellObject.value=computedValue;
        lastSelectedCell.textContent=computedValue;
    }
})

