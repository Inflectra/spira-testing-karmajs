window.calculator = window.calculator || {};

(function () {
    var add = () => {
        var a = document.getElementById("a");
        console.log(a);
        var b = document.getElementById("b");
        document.getElementById("result").innerHTML = a + b;
    }

    var multiply = () => {
        var a = document.getElementById("a");
        var b = document.getElementById("b");
        document.getElementById("result").innerHTML = a * b;
    }

    window.calculator.init = function () {
        document.getElementById("add").addEventListener("click", add);
        document.getElementById("multiply").addEventListener("click", multiply);
    }
})