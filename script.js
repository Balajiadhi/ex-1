 var x;
 var y;
var c;
function one(){
    document.getElementById("myp1").innerHTML = "1";
    x=1;
}

function two(){
    document.getElementById("myp1").innerHTML ="2";
    x = 2;
}
function add(){
     c = x + x ;
     ans();

}
function div(){
    c = x / x;
    ans();
}

function mul(){
    c = x * x;
    ans();
}

function sub(){
    c = x - x;
    ans();
}

function ans(){
    document.getElementById("myp1").innerHTML = c;
}

function ac(){
    x = y = 0;
}