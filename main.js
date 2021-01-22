var i = 1;
function myLoop() {
    setTimeout(function () {
        el = document.createElement('li');
        el.innerHTML = i;
        document.getElementById('ul__list').appendChild(el);
        i++;
        if (i < 21) {
            myLoop();
        }
    }, 2000)
}
myLoop();


var count = 0;
var countEl = document.getElementById("count");
function plus() {
    count++;
    countEl.value = count;
    if (count > 9) {
        alert('interval interzis')
    }
    if (count < 10) {
        countEl.value = count;
    }
}
function minus() {
    if (count > 0) {
        count--;
        countEl.value = count;
    }
    if (count < 0) {
        alert('interval interzis')
    }
}

function draw() {
    var table = document.createElement('table');
    var flag = true;
    var trr = document.createElement('tr');

    for (var i = 0; i < 8; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < 8; j++) {

            if (j == 0)
                flag = !flag;

            var td = document.createElement('td');

            td.style.width = '50px';
            td.style.height = '50px';
            if (flag) {
                td.style.background = 'black';
            } else
                td.style.background = 'white';

            tr.appendChild(td);
            flag = !flag;
        }
        table.appendChild(tr);
    }
    table.appendChild(trr);

    document.body.appendChild(table);
}

draw();