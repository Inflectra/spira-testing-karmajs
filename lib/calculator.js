window.calculator = window.calculator || {};

(function () {
    var parseValue = (e) => {
        return parseInt(e.value);
    }

    var add = () => {
        var a = parseValue(document.getElementById("a"));
        console.log(a);
        var b = parseValue(document.getElementById("b"));
        document.getElementById("result").innerHTML = a + b;
    }

    var multiply = () => {
        var a = parseValue(document.getElementById("a"));
        var b = parseValue(document.getElementById("b"));
        document.getElementById("result").innerHTML = a * b;
    }

    window.calculator.init = function () {
        document.getElementById("add").addEventListener("click", add);
        document.getElementById("multiply").addEventListener("click", multiply);
    }
})