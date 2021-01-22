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
    if (count > 9){
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
    if (count <0){
        alert('interval interzis')
    }
}