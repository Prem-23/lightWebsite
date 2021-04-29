let left = document.querySelector('.left');
let right = document.querySelector('.right');
let img = document.getElementById('image');
let text = document.getElementById('text');
let count = document.getElementById('count');
let title = document.getElementById('title');
let sec1 = document.querySelector('.sec-1');
let sec2 = document.querySelector('.sec-2');
let sec3 = document.querySelector('.sec-3');
let sec4 = document.querySelector('.sec-4');
let sec5 = document.querySelector('.sec-5');


right.onclick = function() {
    if (sec1.className == 'sec-1 current') {
        sec1.classList.remove('current');
        sec2.classList.add('current');
    } else if (sec2.className == 'sec-2 current') {
        sec2.classList.remove('current');
        sec3.classList.add('current');
    } else if (sec3.className == 'sec-3 current') {
        sec3.classList.remove('current');
        sec4.classList.add('current');
    } else if (sec4.className == 'sec-4 current') {
        sec4.classList.remove('current');
        sec5.classList.add('current');
    } else if (sec5.className == 'sec-5 current') {
        sec5.classList.remove('current');
        sec1.classList.add('current');
    }
}

left.onclick = function() {
    if (sec1.className == 'sec-1 current') {
        sec1.classList.remove('current');
        sec5.classList.add('current');
    } else if (sec5.className == 'sec-5 current') {
        sec5.classList.remove('current');
        sec4.classList.add('current');
    } else if (sec4.className == 'sec-4 current') {
        sec4.classList.remove('current');
        sec3.classList.add('current');
    } else if (sec3.className == 'sec-3 current') {
        sec3.classList.remove('current');
        sec2.classList.add('current');
    } else if (sec2.className == 'sec-2 current') {
        sec2.classList.remove('current');
        sec1.classList.add('current');
    }
}