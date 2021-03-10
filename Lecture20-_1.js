window.addEventListener('load', function () {
    var btnPrint = document.getElementById('btn-print');
    var spanPrint = document.getElementById('span-print');
    
    btnPrint.onclick = function () {
        var x = prompt("x");
        var y = prompt("y");
        
        x = parseInt(x);
        y = parseInt(y);

        var calculation = x + y;
        console.log(x + y);
        
        btnPrint.value = calculation;
        spanPrint.innerText = calculation;
    };
});