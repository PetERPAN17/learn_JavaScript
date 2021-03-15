// ex1
window.addEventListener('load', function () {
    var txtX = document.getElementById('txt-x');
    var txtY = document.getElementById('txt-y');
    var btnAdd = document.getElementById('btn-add');
    var txtResult = document.getElementById('txt-result');

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x + y;
    }
});

// ex2
window.addEventListener('load', function () {
    var ex2Sec = document.getElementById('ex2');

    var txtX = ex2Sec.getElementsByClassName('txt-x')[0];
    var txtY = ex2Sec.getElementsByClassName('txt-y')[0];
    var btnAdd = ex2Sec.getElementsByClassName('btn-add')[0];
    var txtResult = ex2Sec.getElementsByClassName('txt-result')[0];

    // var inputs = ex2Sec.getElementsByTagName('input');

    // var txtX = inputs[0];
    // var txtY = inputs[1];
    // var btnAdd = inputs[2];
    // var txtResult = inputs[3];

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x + y;
    }
});