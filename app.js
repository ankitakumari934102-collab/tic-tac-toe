let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turn0 = true;  // true = O's turn false= X's turn

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        /*Prevent clicking the same box again*/
        box.disabled = true;

        checkWinner()
    });
});

function checkWinner() {

    for (let pattern of winPatterns) {

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {

            if (pos1 === pos2 && pos2 === pos3) {
                console.log("Winner:", pos1);
                alert(pos1 + " is the winner!");

                disableBoxes();
            }
        }
    }
}


function disableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}


resetBtn.addEventListener("click", () => {

    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }

    turn0 = true;
});
