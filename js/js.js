//This script toggles the side nav show/hide and inserts text to reflect the change. This was modled off the example on https://teamtreehouse.com/library/styling-elements //

const toggleList = document.getElementById('hide-side-nav');
const listDiv = document.querySelector('.SN');

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = '<<';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = '>>';
    listDiv.style.display = 'none';
    }
});
// end side nav toggle script//

//slideshow //
var slideIndex = 1;
showSlides(slideIndex);

// Next and Previous button controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//end slideshow script//

const donateButton = document.getElementById('donateButton');

donateButton.addEventListener('click', () => {
    //put some JS action in here for the donate button to do when clicked//
});









//This is an alternate way to make the side nave bar hide, but which does not change the text in the hide/show button.//

//makes side nav hide//
// function hide() {
//     var x = document.getElementById("hideSN");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
//  /makes side nav hide//








// // document.querySelector('.side-nav').style.display = 'none';
// $('#SN').click(function (hide) {
// });

//Consider using the main nav links as array objects and inserting them on each page with JS instead of having to modify each set of HTML

// var pages = [
//     'Home',
//     'About',
//     'Calendar',
//     'History',
//     'Photos',
//     'Articles',
//     'Contact'
// ];

// function print(message) {
//     document.write(message);
// }

// function printList(list) {
//     var listHTML = '<ol>';
//     for (var i = 0; i < list.length; i += 1) {
//         listHTML += '<li>' + list[i] + '</li>';
//     }
//     print(listHTML);
// }
// printList(pages);

/* put this in the HTML <div id="output"> then put this in the JS  var outputDiv = document.getElementById('output'); to reference that specific place in the HTML*/