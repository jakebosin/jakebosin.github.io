var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/small-snack.jpg') {
    myImage.setAttribute('src','images/lays-classic.png');
  } else {
    myImage.setAttribute('src','images/small-snack.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Snack well, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textcontent = 'Snack well, ' + storedName;
}

myButton.onclick = function() {
  setUserName()
}