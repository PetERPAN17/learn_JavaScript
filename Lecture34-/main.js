//Ex7
window.addEventListener("load", function () {
    var notices = [
        { id: 5, title: "퐈이야~~~", regDate: "2019-01-26", writerId: "newlec", hit: 0 },
        { id: 6, title: "나 좀 복제해줘~", regDate: "2019-01-26", writerId: "newlec", hit: 17 }
    ];

    var section = document.querySelector("#section7");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function () {
        var trNode = noticeList.querySelector('tbody tr');
        var cloneNode = trNode.cloneNode(true);
        var tds = cloneNode.querySelectorAll('td');
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="' + notices[0].id + '">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        // tbodyNode.appendChild(cloneNode);
        tbodyNode.append(cloneNode);
        console.log(cloneNode);
    };

    templateButton.onclick = function () {
        var template = section.querySelector('template');
        var cloneNode = document.importNode(template.content, true);
        var tds = cloneNode.querySelectorAll('td');
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="' + notices[0].id + '">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writerId;
        tds[4].textContent = notices[0].hit;

        tbodyNode.append(cloneNode);
    };

});

//Ex8-노드 삽입과 바꾸기
window.addEventListener("load", function () {

    var section = document.querySelector("#section8");

    var noticeList = section.querySelector(".notice-list");
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;//.children[0];

    downButton.onclick = function () {
        var nextNode = currentNode.nextElementSibling;
        if (nextNode == null) {
            alert('No more next to moving.');
            return;
        }
        // tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement('beforebegin', nextNode);
    };

    upButton.onclick = function () {
        var previousNode = currentNode.previousElementSibling;
        if (previousNode == null) {
            alert('No more previous to moving.');
            return;
        }
        // tbodyNode.insertBefore(currentNode, previousNode);
        currentNode.insertAdjacentElement('afterend', previousNode);
    };

});


//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function () {

    var section = document.querySelector("#section9");

    var noticeList = section.querySelector(".notice-list");
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function () {
        var checkInputs = tbody.querySelectorAll('input[type="checkbox"]');
        checkInputs.forEach(element => {
            element.checked = allCheckbox.checked;
        });
    };

    delButton.onclick = function () {
        var checkInputs = tbody.querySelectorAll('input[type="checkbox"]:checked');

        checkInputs.forEach(element => {
            element.parentElement.parentElement.remove();    
        });
    };

    swapButton.onclick = function () {
        var checkedInputs = tbody.querySelectorAll('input[type="checkbox"]:checked');

        if (checkedInputs.length !== 2) {
            alert('Must choose the only two items.');
            return;
        }

        var trs = [];
        checkedInputs.forEach(element => {
            trs.push(element.parentElement.parentElement);
        });

        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };
});