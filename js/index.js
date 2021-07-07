// Your code goes here
// Logo manipulating (mouseover)
const header = document.querySelector('header')
const logoheading = document.querySelector('.logo-heading')
logoheading.addEventListener('mouseover', function(event) {
    event.target.style.color = "orange";
    event.target.style.fontSize  = '50px'
    console.log(event.type);

setTimeout(function() {
    event.target.style.color = "";
    event.target.textContent = 'Not Any More ! Bye'
  }, 1000);

}, false);

//nav items manipulating
const navitems = document.querySelectorAll('.nav-link')
Array.from(navitems).forEach(el => { 
    el.addEventListener('click', function(event) {
        event.preventDefault();
        console.log("link clicked")
       },false) })

       
//copy
Array.from(document.all).forEach(el => {
    el.addEventListener('copy', function(event){
        const selection = document.getSelection();
        event.clipboardData.setData('text/plain', selection.toString());
        event.preventDefault();
        alert('you copied some data succesfully ')
        
    })
})


//focus
const myform = document.createElement('form')
const myinput = document.createElement('input')
const headerp = document.querySelector('header p')
console.log(myform)
console.log(myinput)
headerp.appendChild(myform);
myform.appendChild(myinput);
myinput.placeholder = 'Focus on me'

myinput.addEventListener('focus', function(event){
    event.target.style.borderColor = 'orange'
    myinput.placeholder = 'Good job you did it'
})

//header item manipulating (keydown)
const header2 = document.querySelector('.intro h2')
header2.textContent = header2.textContent + ' (Enter your name) '
document.addEventListener('keydown', function(event) {
     header2.textContent = header2.textContent + event.key 
   },false)


// image manipulating (wheel)

const myimg = document.querySelector('.intro img')
myimg.addEventListener('wheel',function(event){
    event.target.src = '/destination.28855ccd.jpg';
    logoheading.textContent = 'Fun boat'
    header2.textContent = 'Welcomt to fun Boat !'+ ' (Enter your name) '


})


//load
window.addEventListener('load', function(event){
    alert('Welcome to my fun page!, to change page to boat version move wheel on the bus image, and Dont forget to write your name on the keyboard !, to enter the race(that you will definitely lose) keep scrolling :)')

})

//click
const letsgo = document.querySelector('.text-content h2');
letsgo.textContent = letsgo.textContent + ' (Click me one time!)'
letsgo.addEventListener('click', function(event){
    letsgo.textContent = 'Lets rock !'
})

//resize
const myheight = document.createElement('p')
const mywidth = document.createElement('p')

header.appendChild(myheight);
header.appendChild(mywidth);


window.addEventListener('resize', function(event){

    myheight.textContent = 'windows current height is ' + window.innerHeight
    mywidth.textContent = 'windows current width is ' + window.innerWidth
})

//scroll
document.addEventListener('scroll', function(event){
    let mybody = document.querySelector('body')
    let lastscrollpos = window.scrollY
    console.log(lastscrollpos)
    if (lastscrollpos > mybody.style.height - 600){
        const paragraph = document.createElement('p')
        mybody.appendChild(paragraph);
        paragraph.textContent = 'Keep scrolling you are almost there !'

    }
})
const input = document.querySelector('.content-section .text-content');

//double click
const parag = document.createElement('p')
parag.textContent = 'this is the magic section double click on anything to make it disappear !'
parag.style.color = 'red'
input.appendChild(parag);
  input.addEventListener('dblclick', function(event){
    event.target.style.display = 'none'
  });