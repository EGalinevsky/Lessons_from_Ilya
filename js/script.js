let buttonSum = document.getElementById('sum');
let buttonminus = document.getElementById('minus');
let buttonmulti = document.getElementById('multi');
let buttondivide = document.getElementById('divide');

let input1 = document.getElementById('number_1');
let input2 = document.getElementById('number_2');

let answer = document.getElementById('answer');



function onButtonPlusCLick(){

    let number_1 = Number(input1.value);
    let number_2 = Number(input2.value);

    let result = number_1 + number_2;   

    document.getElementById('answer'). innerText = '=' + result;
}


function onButtonMimusCLick(){

    let number_1 = Number(input1.value);
    let number_2 = Number(input2.value);

    let result = number_1 - number_2;

    document.getElementById('answer'). innerText = '=' + result;
}
function onButtonMultiCLick(){

    let number_1 = Number(input1.value);
    let number_2 = Number(input2.value);

    let result = number_1 * number_2;

    document.getElementById('answer'). innerText = '=' + result;
}
function onButtonDivideCLick(){

    let number_1 = Number(input1.value);
    let number_2 = Number(input2.value);

    let result = number_1 / number_2;

    document.getElementById('answer'). innerText = '=' + result;
}

buttonSum.addEventListener('click', onButtonPlusCLick);
buttonminus.addEventListener('click', onButtonMimusCLick);
buttonmulti.addEventListener('click', onButtonMultiCLick);
buttondivide.addEventListener('click', onButtonDivideCLick);


