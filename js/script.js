let buttonSum = document.getElementById('sum');
let buttonminus = document.getElementById('minus');
let buttonmulti = document.getElementById('multi');
let buttondivide = document.getElementById('divide');

let input1 = document.getElementById('number_1');
let input2 = document.getElementById('number_2');

let answer = document.getElementById('answer');

function getNumber1(){
    return Number(input1.value);
}
function getNumber2(){
    return Number(input2.value);
}


function makeOperation(operationCode){

    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();  
        
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();

    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();

    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    } 
         
    document.getElementById('answer'). innerText = '=' + result;
}

function onButtonPlusCLick() {
    makeOperation('+'); 
}

function onButtonMimusCLick(){
    makeOperation('-'); 
}
function onButtonMultiCLick(){
    makeOperation('*'); 
}
function onButtonDivideCLick(){
    makeOperation('/'); 
}

buttonSum.addEventListener('click', onButtonPlusCLick);
buttonminus.addEventListener('click', onButtonMimusCLick);
buttonmulti.addEventListener('click', onButtonMultiCLick);
buttondivide.addEventListener('click', onButtonDivideCLick);


