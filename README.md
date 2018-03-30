# St.Jos
Rebuild of the St. Joseph's Area Association website for Code Louisville Front End Web Development January 2018, by Nicholas Johnson

Project Summary: This project is a redesign and modernization of my local neighborhood association’s website, found at http://www.stjosaa.org/ . The original website was built using Microsoft FrontPage 6.0. It is old, out of date, and does not manage the HTML, CSS, and JS in separate folders; rather, it included the styles and scripts written in-line in the HTML documents. In order to break apart the inline styles and script, it was necessary to remove some of the functionality that the original site had. (The default.html file is a copy of how the site front page originally looked.) The main pages of the site (Home, About, Calendar, History, Photos, Articles, and Contact) have been revamped to varrying degrees to increase aesthetic and functional aspects of the original site, and to demonstrate skills acquired during the Front End Web Development track. Many of the Articles sub-pages have also been enhanced with layout and styling upgrades.

The features I have added to meet project requirements are listed below, contained in *asterisks*.

Requirements:

Your project is responsive to different devices and/or browser sizes or screen resolutions.
As the browser is resized, your site should alter elements on the page to improve the display. The two most common methods to accomplish this is either:
CSS media queries that will change elements on your page above or below certain screen sizes


*The site header and horizontal nav bar wrap the text to the next line as the viewport width decreases. Once the viewport reaches mobile device sizes, the nav bar switches from row to column layout.
The columns on the “History” page go from a 2 column to 1 column layout-- same as with the “April 11, 2017 Zanzabar…” article on the Articles page. Additionally, the vertical side navigation menu disappears as the viewport narrows, so that it doesn’t obstruct content.*

Your project includes at least 3 custom CSS class and/or ID selectors which are applied to your HTML elements

*This project contains many CSS selectors in the styles.css file, because I styled most of the elements before learning about Bootstrap and more efficient styling frameworks. For this reason, there are some redundancies in the styling, and therefore some violations of the DRY principle in my code which I plan to consolidate in the future. (Any inline CSS still on the sub-pages is holdover from the original Microsoft FrontPage 6.0 WYSIWYG code.*

Documentation of your 3 CSS selectors and 1 JavaScript function:



## Custom CSS Classes

*Some of the CSS classes I created are:



1. .top-nav a  Targets the anchor elements within the top-nav class. The styling sets a relative font size using ems, sets the color of the text to white, adjusts the padding and margins to situate the elements in a visibly pleasing layout, and sets the display to inline so that the elements will lay horizontally in a row across the page.

2.

 footer Targets the footer element so that it will stretch 100% across the page, no matter the device width. By setting a white color text on a light grey background, the text has enough contrast to be highly visible, but is not distracting from the main focus on the body of the page. 

3. .col Another style of note is .col which lays out the styles for the columns on several pages. By setting the display to inline-block and the width to 50%, it is possible to have two equally sized columns to make text more readable. By nesting this class in a media query, it is possible to have the two collumns collapse to one for enhanced readability on a small screen.*


Your project includes custom JavaScript including at least one JavaScript function
You must include some form of JavaScript written by you, and must be included in a .js file in your project (no inline JavaScript)
It must include at minimum 1 JavaScript function (the function has to actually perform an action, it cannot just be correct but non-functional code) 





## Custom JavaScript Functions


*The javascript functions I created are:


1. showSlides() which creates an image carousel that displays a different image every 3 seconds by targeting the mySlides class in the HTML.
 This feature can be viewed at the top of the Photos page. 

2. hide() which toggles hiding or showing the verticle side navigation bar when the button is clicked. This feature works on all of the main pages of the site (Home, About, Calendar, History, Photos, Articles, and Contact)*

Your code has comments
Every line doesn’t need a comment, but major sections of your CSS, HTML, and/or JavaScript files should have some helpful comments so a reviewer can know what the major parts of your code do

Your project code is on your GitHub account in its own repository
If you choose to host your application on a live URL, GREAT! You can share that for demonstration purposes or ease of running - and this is encouraged! But your code must still be available on GitHub for review.

*Project files can be found at https://github.com/nickjf22/St.Jos or the live site at https://nickjf22.github.io/St.Jos/ *

It must include a README file located at the top level directory of your project


