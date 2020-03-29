const MENU = document.getElementById("navigation");

var btnprev =  document.getElementById("prev");
var btnnext =  document.getElementById("next");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var n = 2;
var p = 2;

var phone1 = document.getElementById("phone1");
var phone2 = document.getElementById("phone2");
var vscreen = document.querySelector('.verticalscreen');
var hscreen = document.querySelector('.horizontalscreen');
var q = 2;
var w = 2;

var image = document.getElementById("images");
var menu1 = document.getElementById("menu1");



MENU.addEventListener("click", (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});


phone1.onclick = function phone1(){
	q++;
	if (q%2 == 0) {
	vscreen.classList.remove('hidden'); }
	else {
	vscreen.classList.add('hidden'); }
};

vscreen.onclick = function screen1(){
	q++;
	if (q%2 == 0) {
	vscreen.classList.remove('hidden'); }
	else {
	vscreen.classList.add('hidden'); }
};

phone2.onclick = function phone2(){
	w++;
	if (w%2 == 0) {
	hscreen.style.display = ""; }
	else {
	hscreen.style.display = "none"; }
};

hscreen.onclick = function screen2(){
	w++;
	if (w%2 == 0) {
	hscreen.style.display = ""; }
	else {
	hscreen.style.display = "none"; }
};



let imageElements = []
image.querySelectorAll('li').forEach(el =>  imageElements.push(el.outerHTML))

let shuffle = (arr, position) => {
    let resultArr = []
    for(let i = 0; i<arr.length;i++){
        let j = (position+i) % arr.length
        resultArr[i] = arr[j]
    }
    return resultArr
}

menu1.addEventListener('click', (event) => {
    menu1.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    if (event.target.textContent == "All") {
        image.innerHTML = imageElements
    } else if (event.target.textContent == "Web Design") {
        image.innerHTML = shuffle(imageElements , 2)
    } else if (event.target.textContent == "Graphic Design") {
        image.innerHTML = shuffle(imageElements, 4)
    } else if (event.target.textContent == "Artwork") {
        image.innerHTML = shuffle(imageElements, 8)
    }

    event.target.classList.add('active');
})

image.addEventListener('click', (event) => {
    image.querySelectorAll('li').forEach(el => el.querySelector('img').classList.remove('activeborder'));
    console.log(event.target)
    event.target.classList.add('activeborder');
})



function Next() {
	if (n % 2 == 0) {
	slide1.classList.add('activeslide1');
	slide2.classList.remove('activeslide1');
	slide2.style.display = "block";
	}
	else {
	slide2.classList.add('activeslide1');
	slide1.classList.remove('activeslide1');
	}
	n++;
}
 

function Prev() {
	if (p % 2 == 0) {
	slide1.classList.add('activeslide2');
	slide2.classList.remove('activeslide2');
	slide2.style.display = "block";
	}
	else {
	slide2.classList.add('activeslide2');
	slide1.classList.remove('activeslide2');
	}
	p++;
}
