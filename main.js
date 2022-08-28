function fun() {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    let ans = document.getElementById("ans");
    ans.innerHTML = "₹ " + ((p * r) / 100) * t;
}

function fun0() {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;
    let ans = document.getElementById("ans");
    ans.innerHTML = "₹ " + (((p * r) / 100) * t + Number(p));
}

let CI = () => {
    document.querySelector(".areaBody").style.display = "none";
    document.querySelector(".areaBody2").style.display = "block";
};
let SI = () => {
    document.querySelector(".areaBody").style.display = "block";
    document.querySelector(".areaBody2").style.display = "none";
};

let funS0 = () => {
    let p = document.getElementById("principal2").value;
    let r = document.getElementById("rate2").value;
    let t = document.getElementById("time2").value;
    let ans = document.getElementById("ans2");
    let AmCi = p * Math.pow(1 + r / 100, t);
    ans.innerHTML = "₹ " + AmCi.toFixed(2);
};
let funs = () => {
    let p = document.getElementById("principal2").value;
    let r = document.getElementById("rate2").value;
    let t = document.getElementById("time2").value;
    let ans = document.getElementById("ans2");
    let AmCi = p * Math.pow(1 + r / 100, t);
    ans.innerHTML = "₹ " + Number(AmCi - p).toFixed(2);
};