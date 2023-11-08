// variables to store HTML elements
let placeholder = document.querySelector(".placeholder");
let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");


// click event for buttonOne
buttonOne.addEventListener('click', function() {

    // 1. Select the placeholder and update the src.
    // - The image address should be a picture of a place you want to travel to.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.

placeholder.src = "https://hbr.org/resources/images/article_assets/2020/09/A_Sep20_14_1189155141.jpg";


});


// click event for buttonTwo
buttonTwo.addEventListener('click', function() {

    // 2. Select the placeholder and update the src.
    // - The image address should be a picture that represents your mood.
    // - Use Google Search, find a photo you want, right-click, and copy the image address.

placeholder.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/278px-London_Skyline_%28125508655%29.jpeg";

    

});