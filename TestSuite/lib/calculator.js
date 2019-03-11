window.calculator = {};

(function () {
    var parseValue = (e) => {
        return parseInt(e.value);
    }

    var add = () => {
        var a = parseValue(document.getElementById("a"));
        var b = parseValue(document.getElementById("b"));
        document.getElementById("result").innerHTML = a + b;
    }

    var multiply = () => {
        var a = parseValue(document.getElementById("a"));
        var b = parseValue(document.getElementById("b"));
        document.getElementById("result").innerHTML = a * b;
    }

    window.calculator.init = () => {
        document.getElementById("add").addEventListener("click", add);
        document.getElementById("multiply").addEventListener("click", multiply);
    }
})();