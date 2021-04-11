

//functions the calculator
var input1;
var input2;
var result;



function add(input1, input2){
   /* var input1;
    var input2;
    var result;*/

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) + Number(input2);
    document.querySelector('#output-cal').innerHTML = result;

}

function sub(){
    /*var input1;
    var input2;
    var result;*/

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) - Number(input2);
    document.querySelector('#output-cal').innerHTML = result;
}

function mul(){
    /*var input1;
    var input2;
    var result;*/

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) * Number(input2);
    document.querySelector('#output-cal').innerHTML = result;
}

function div(){
    /*var input1;
    var input2;
    var result;*/

    input1 = document.getElementById('input-cal1').value;
    input2 = document.getElementById('input-cal2').value;
    result = Number(input1) / Number(input2);
    document.querySelector('#output-cal').innerHTML = result;
}

function c(){
    input1 = 0;
    input2 = 0;
    result = 0;
    document.querySelector('#output-cal').innerHTML = result;

}