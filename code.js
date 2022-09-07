// select button
let btnClick = document.querySelector('button');

//get checkbox element
let box1 = document.getElementById('check1');
let box2 = document.getElementById('check2');



// function to run when button is clicked
function clickMe() {
    if (box1.checked) {
        console.log('box1 checked');
    }
    else
        console.log('box1 unchecked');
}

function clickMe2() {
    if (box2.checked) {
        console.log('box2 checked');
    }
    else
        console.log('box2 unchecked');
}



// run function on click
btnClick.addEventListener('click', () => {
    clickMe();
    clickMe2();

})