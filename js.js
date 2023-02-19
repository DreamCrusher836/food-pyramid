var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
// these are all the adding functions for all the adding buttons
// also if the number goes below 0 set it to 0
function addNum1() {
    num1++;
    document.getElementById("num1").innerHTML = num1;
    // was just checking and figurng it out how to link it and make it work 
    console.log("got clicked");
}

function addNum2() {
    num2++;
    document.getElementById("num2").innerHTML = num2;
}

function addNum3() {
    num3++;
    document.getElementById("num3").innerHTML = num3;
}

function addNum4() {
    num4++;
    document.getElementById("num4").innerHTML = num4;
}

function addNum5() {
    num5++;
    document.getElementById("num5").innerHTML = num5;
}

function addNum6() {
    num6++;
    document.getElementById("num6").innerHTML = num6;
}
// these are all the minus buttons for all the minus buttons
function minusNum1() {
    num1--;
    if (num1 < 0) {
        num1 = 0
    }
    document.getElementById("num1").innerHTML = num1;
}

function minusNum2() {
    num2--;
    if (num2 < 0) {
        num2 = 0
    }
    document.getElementById("num2").innerHTML = num2;
}

function minusNum3() {
    num3--;
    if (num3 < 0) {
        num3 = 0
    }
    document.getElementById("num3").innerHTML = num3;
}

function minusNum4() {
    num4--;
    if (num4 < 0) {
        num4 = 0
    }
    document.getElementById("num4").innerHTML = num4;
}

function minusNum5() {
    num5--;
    if (num5 < 0) {
        num5 = 0
    }
    document.getElementById("num5").innerHTML = num5;
}

function minusNum6() {
    num6--;
    if (num6 < 0) {
        num6 = 0
    }
    document.getElementById("num6").innerHTML = num6;
}