function Add() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let addition = Number(num1) + Number(num2);
    document.getElementsByName("add")[0].value = addition;
    document.getElementById("ansSum").innerHTML = addition;
}

function Multiply() {
    let num3 = document.getElementsByName("num3")[0].value;
    let num4 = document.getElementsByName("num4")[0].value;
    let Multiplication = Number(num3) * Number(num4);
    document.getElementsByName("product")[0].value = Multiplication;
    document.getElementById("ansMultiply").innerHTML = Multiplication;
}

function Subtract() {
    let num5 = document.getElementsByName("num5")[0].value;
    let num6 = document.getElementsByName("num6")[0].value;
    let Subtraction = Number(num5) - Number(num6);
    document.getElementsByName("minus")[0].value = Subtraction;
    document.getElementById("ansSubtract").innerHTML = Subtraction;
}

function Divide() {
    let num7 = document.getElementsByName("num7")[0].value;
    let num8 = document.getElementsByName("num8")[0].value;
    let Division = Number(num7) / Number(num8);
    document.getElementsByName("division")[0].value = Division;
    document.getElementById("ansDivide").innerHTML = Division;
}