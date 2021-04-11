

//functions the calculator

function add(){
    var input1;
    var input2;
    var result;

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) + Number(input2);
    document.querySelector('#output-cal').innerHTML = result;

}

function sub(){
    var input1;
    var input2;
    var result;

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) - Number(input2);
    document.querySelector('#output-cal').innerHTML = result;
}

function mul(){
    var input1;
    var input2;
    var result;

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) * Number(input2);
    document.querySelector('#output-cal').innerHTML = result;
}

function div(){
    var input1;
    var input2;
    var result;

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) / Number(input2);
    document.querySelector('#output-cal').innerHTML = result;
}