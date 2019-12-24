// To select the element with id of bear-photo:
document.getElementById('bear-photo');

//To select the element with id of main:
document.getElementById('main');

document.getElementsByTagName('input');
document.getElementsByClassName('special');
// first match
document.querySelector('p');
document.querySelector('#bear-photo');
document.querySelector('section ul li.special');
document.querySelector('input[type="password"]');

// queryselectorAll-nodelist
// working with innerText and textContent

const header = document.querySelector('.header');
header.innerText;
header.textContent;

const ul = document.querySelector('ul');
ul.innerText;
ul.textContent;
// innerHtml- not only the text but also the tags inside
const form = document.querySelector('form');
form.innerHTML;
// form.innerHTML = '<b>Test</b>';
const h1 = document.querySelector('h1');
h1.innerHTML += ` <b>!!!!!</b>`;
// value,src,href
const inputForm = document.querySelectorAll('input');
inputForm[0].value;
inputForm[2].value; //for checkbox check checked instead of value
inputForm[3].value; //checking value of range input
const a = document.querySelector('a');
a.href = 'https://www.google.com';

const img = document.querySelector('img');
img.src;
const range = document.querySelector("input[type='range']");
range.getAttribute('max');
range.getAttribute('type');
range.setAttribute('max', '800');
// traversal- parent child sibling

const firstLi = document.querySelector('li');
firstLi.parentElement; //ul
firstLi.parentElement.parentElement; //body
const myUl = document.querySelector('ul');
myUl.children; //HTMLCollection - no forEach
myUl.children[0].nextElementSibling; //Sedcond THind list
// changing elements
const allLis = document.querySelectorAll('li.special');
for (let i = 0; i < allLis.length; i++) {
	console.log(allLis[i].innerText);
	allLis[i].innerText = 'We are the champions';
}
for (let li of allLis) {
	li.innerHTML = 'We are <b>the annoying group</b>';
}
// altering styles
const myHead = document.querySelector('.header');
myHead.style.color = 'orchid';
const firstP = document.querySelector('p');
firstP.style.backgroundColor = 'grey';

const allMyLi = document.querySelectorAll('li');
const colors = ['red', 'orange', 'green', 'blue', 'yellow', 'pink'];
allMyLi.forEach((ele, idx) => {
	ele.style.color = colors[idx];
});
// retrieve style value-getComputedStyle
const myFirstLi = document.querySelector('li');
myFirstLi.style.color;
const computed = getComputedStyle(myFirstLi);
// manipulating classes
const todo = document.querySelector('#todos .todo');
// todo.style.color = 'grey';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';
// todo.setAttribute('class', 'todo done');
todo.classList.add('done');
todo.classList.toggle('done');
// create ann insert elements
const h2 = document.createElement('h2');
h2.innerText = 'I like animals';
h2.classList.add('special');
header.appendChild(h2);
const section = document.querySelector('section');
section.appendChild(h2);
const newImg = document.createElement('img');
newImg.src =
	'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/30/2014/01/000024638-Kendall_and_Kylie_Jenner.jpg';
newImg.style.height = '200px';
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'youtube video';
newLink.href = 'https://www.youtube.com/watch?v=QQNL83fhWJU';
const firstPara = document.querySelector('p');
firstPara.appendChild(newLink);
// append prepend insertBefore
const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'I am a new li';
newLi.classList.add('todo');
newLi.style.color = 'red';
parentUl.appendChild(newLi);
const mowLi = document.querySelector('li.todo');
parentUl.insertBefore(newLi, mowLi);
const myLastLi = document.querySelectorAll('#todos li.todo')[3];
console.log(myLastLi);
parentUl.insertBefore(newLi, myLastLi);
// insertAdjacentElement-position relatrive to the target
// beforebegin afterbegin beforeend afterend
