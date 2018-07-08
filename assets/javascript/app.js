var giphy = {
    topics : ["Conor Mcgregor", "Cristiano Ronaldo", "Lebron James", "Serena Williams","Tom Brady"],
    
    // displays buttons to the page 
    renderButtons : function () { 

        // empty the athletebutton div so renderButtons function can be used in the addButton function
        $("#athleteButton").empty();
        
        // for each item in the array 
        $.each(giphy.topics, function(index){
            // create button 
            var btn = $("<button>");

            //make data person attribute for each button 
            btn.attr("data-person", giphy.topics[index]);

            //create button text for each button id 
            btn.text(giphy.topics[index]);

            //append each button onto #athleteButton
            $("#athleteButton").append(btn);

            giphy.displayGifs();
            
        })
        
    },

    //when button is clicked, pulls 10 static images from giphy api linked to the button id and displays to page 
    displayGifs : function () {
        //when button is clicked 
        $("button").on("click", function () {
            //retreive what button was clicked by the user 
            var athlete = $(this).attr("data-person");
            
            // Constructing a URL to search Giphy for the name of the person who said the quote
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + 
            athlete + "&api_key=6jO7iVeMTndCquw7FRoqjsX9r46l9xiP&limit=10";

            // Performing our AJAX GET request
            $.ajax({
                url : queryURL,
                method: "GET"
            })

            // After the data comes back from the API 
            .then(function (response) {
                console.log(response);
                // Storing an array of results in the results variable
                var results = response.data;

                //Loop through every result item 
                for (var i = 0; i < results.length; i++) {
                    // create a div with the class of "item"
                    var gifDiv = $("<div class='item'>");

                    //Store the result item's rating 
                    var rating = results[i].rating;

                    // Create a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Create an image tag
                    var athleteImage = $("<img>");

                    //Link the url for the image from api object to the image tag by attributing a src
                    athleteImage.attr("src", results[i].images.original_still.url);

                    // giving each image tag data-still
                    athleteImage.attr("data-still", results[i].images.original_still.url);

                    //data-animate 
                    athleteImage.attr("data-animate", results[i].images.original.url);

                    // data-state = still
                    athleteImage.attr("data-state", "still");

                    //append the rating to the gifDiv 
                    gifDiv.append(p);

                    //append the image to the gifDiv 
                    gifDiv.append(athleteImage);

                    //prepend the gifDiv to the html div athleteButton
                    $("#gif").prepend(gifDiv);

                    giphy.enableAnimationAndPausing();

                }
            })
            
        })

    },

    // when gif is clicked, animate the image, when clicked again pause the image
    enableAnimationAndPausing : function () {
        //when the img tag is clicked,
            $("img").on ("click", function () {
                var state = $(this).attr("data-state");
                
                if (state === "still") {
                    // animate the image
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else {
                    //when clicked again pause the image
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }

            })
    },

    // allows user to add button based on form input 
    addButtons : function () {
        //when submit is clicked 
            $("#add-athlete").on("click", function (event) {
                
                // must use event.preventDefault for forms
                event.preventDefault();
                
                // retrieve the value of input and store into a variable
                var input = $("#athlete-input").val().trim();
                console.log(input)

                //push the input variable into the buttons array 
                giphy.topics.push(input);
                console.log(giphy.topics);

                giphy.renderButtons();

                $("#athlete-input").val("");

                gifDiv.displayGifs();


            })
    }

}

$( document ).ready(function() {
    giphy.renderButtons();
    // giphy.displayGifs();
    giphy.addButtons();
});