      //Create buttons to do the following:
//Change the size of a heading with a button

function fontSize() {
  document.getElementById ('changeSize').style.fontSize = 'xx-large';
}
//Change the font style of a paragraph*/

function changeStyle() {
  document.getElementById ("newStyle").style.fontStyle = "italic";
    
}

// Highlight a paragraph
function highlight() {
    document.getElementById ("chighlight").style.color = "green";
}

// Hide an Image
function hideImage() { 
    document.getElementById("hideHorses").style.visibility = 'hidden';
}


//An alert to allow the user know when the page has loaded
function loadAlert() {
  alert("I am totally loaded$$ ;)");
}


/*Highlight all paragraphs when the mouse moves over them (then revert back once
it has moved past them).*/
function mHighlight() {
  document.getElementById("phighlight").style.color = "red";
}

function noHighlight() {
  document.getElementById("phighlight").style.color = "black";
}

 //Alternate between two images on click
var image_tracker='dandelions';

function swapImage(){
  var image =document.getElementById('imageSwap');
  if(image_tracker=='dandelions'){
    image.src='cat.jpg';
    image_tracker='cat';
  }
  else{
    image.src='dandelions.jpg';
    image_tracker='dandelions';
  }
}

/* Change an image when the mouse moves onto it, and then back to the original
image when the mouse moves off of it.*/
function newImage() {
  document.getElementById("changeImage").src ="Veggies.jpg";
}
function oldImage(){
  document.getElementById("changeImage").src ="Heartsalad.jpg";
}

/* Create a script which creates an alert on the page when a user right clicks on a
specific image.*/
function describeAlert(){
  alert('You right clicked a picture of wild horses');
  }
//Create an alert on the page when a user enters data into a form.
function submitAlert() {
  alert('Submitted. Thanks!');
  }

  