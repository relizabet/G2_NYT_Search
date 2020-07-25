$(document).ready(function () {

    const searchTerm = $("#searchTerm");
    const numberOfRecords = $("#numberOfRecords");
    const startYear = $("#startYear");
    const endYear = $("#endYear");
    const apiKey = "UINZbaJuKzgZTYcGxYBaxsEsuQFsWB9S";

    let siteURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    let startYearS = "";
    let endYearS = "";

    $(".search").on("click", function (event) {
        event.preventDefault();

        startYearS = startYearS + startYear.val() + "0101";
        endYearS = endYearS + endYear.val() + "0101";
        console.log(startYearS);
        console.log(endYearS);

        queryURL = `${siteURL}q=${searchTerm.val}&begin_date=${startYearS}&end_date=${endYearS}&api-key=${apiKey}`;
       

        $.ajax({
            url: queryURL, 
            method: "GET"
        }).then(function(response){

            console.log(response);
        })

})

    // Create on click button for search 

    // Grab values from input

    // Search API with Get method

    // Retrieve search data

    // Append results to screen





});