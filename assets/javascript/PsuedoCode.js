var giphy = {
    buttons : ["Conor Mcgregor", "Cristiano Ronaldo", "Lebron James", "Serena Williams","Tom Brady"],
    
    // displays buttons to the page 
    renderButtons : function () { 
        // make each item in array into buttons
        //make button id for each button 
        //append each button onto #athleteButton
    },

    //when button is clicked, pulls 10 images from giphy api linked to the button id and displays to page 
    displayGifs : function () {
        //when button is clicked 
        //link button id to giphy api 
        //create img tags for each image from the giphy api 
        //link img tags to each image from the giphy api
        // append the img tags to html 

        giphy.enableAnimationAndPausing();
    },

    // when gif is clicked, animate the image, when clicked again pause the image
    enableAnimationAndPausing : function () {
        //when the img tag is clicked,
        // animate the image 
        // when clicked 
        // pause the image 
    },

    // allows user to add button based on form input 
    addButtons : function () {
        // retrieve the value of input 
        // create a variable for the retrieved value of input 
        // push the variable into the buttons Array 
        
        // giphy.renderButtons(); will then convert the new item in the array into a new button with a new button id.  
        // It will also display the new button onto the page
        giphy.renderButtons();

        // giphy.displayGifs(); will display the 10 images of the new button id to the page 
        // when new button is clicked
        giphy.displayGifs();

        // giphy.enableAnimationAndPausing (); allows the new gifs to animate and pause
        giphy.enableAnimationAndPausing ();
    }

}

$( document ).ready(function() {
    giphy.renderButtons();
    giphy.displayGifs();
    giphy.addButtons();
});