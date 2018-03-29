//start slideshow script//
var slideIndex = 0;
showSlides();

function showSlides() {
        var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds   add a class w  for hide and show
}
//end slideshow script//

//makes side nav hide//
function hide() {
    var x = document.getElementById("hideSN");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//  /makes side nav hide//


















// const donateButton = document.getElementById('donateButton');

// donateButton.addEventListener('click', () => {
//     //put some JS action in here for the donate button to do when clicked//
// });

// // document.querySelector('.side-nav').style.display = 'none';
// $('#SN').click(function (hide) {

// });

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