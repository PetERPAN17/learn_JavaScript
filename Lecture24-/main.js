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

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x + y;
    }
});

// ex3
window.addEventListener('load', function () {
    var SecEx3 = document.getElementById('ex3');

    var txtX = SecEx3.querySelector("input[name='x']");
    var txtY = SecEx3.querySelector("input[name='y']");
    var btnAdd = SecEx3.querySelector("input[name='btn-add']");
    var txtResult = SecEx3.querySelector("[name='result']");

    btnAdd.onclick = function() {
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtResult.value = x + y;
    }
});

// ex4
window.addEventListener('load', function () {
    var SecEx4 = document.getElementById('ex4');
    var box = SecEx4.querySelector('.box');
    var input1 = box.children[0];
    var input2 = box.children[1];
    
    input1.value = 'input1';
    input2.value = 'input2';

    var nodes= box.childNodes;
    // console.log(nodes);
});

// ex5
window.addEventListener('load', function () {
    var Sec = document.querySelector('#ex5');
    var srcInput = Sec.querySelector('.src-input');
    var selectImg = Sec.querySelector('.selecet-img');
    var changeBtn = Sec.querySelector('.change-btn');
    var img = Sec.querySelector('.img');
    var colorInput = Sec.querySelector('.color-input');

    changeBtn.onclick = function(){
        img.src = 'img/' + srcInput.value;
        // img.src = 'img/' + selectImg.value;

        // img.style['border-color'] = colorInput.value;
        img.style.borderColor = colorInput.value;
        console.log(img.className);
    };
});

// ex6
window.addEventListener('load', function () {
    var sec = document.querySelector('#ex6');
    var titleInput = sec.querySelector('.title-input');
    var menuListDiv = sec.querySelector('.menu-list');
    var AddBtn = sec.querySelector('.add-btn');
    var DelBtn = sec.querySelector('.del-btn');

    AddBtn.onclick = function(){
        var txtNode = document.createTextNode(titleInput.value);
        menuListDiv.appendChild(txtNode);
    };

    DelBtn.onclick = function(){
        menuListDiv.removeChild(menuListDiv.childNodes[0]);
    };
});