
$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
    
})

var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var currentTime = moment().format("h A");


//gives the current time to the hour for each span element that contains 
//the time in string format. for example 11A M.
//The each() method specifies a function to run for each matched element.
//element - The current element (the "this" selector can also be used).
//source: https://www.w3schools.com/jquery/misc_each.asp.
//Syntax:  $(selector).each(function(index,element))/
$(".TIME").each(function(i){
    //current hour (see line 5 to display it in the browser).
   $(this).text(moment().hour(i+9).format("h A"));
    
})

$(document).ready(function(){
    
    $.each( timeArray, function(value) {
        console.log("currentTime in document line 29 " + currentTime)
        console.log("timeArray document line 29 " + timeArray)

        if (currentTime < timeArray[value]) {
            console.log("currentTime in document line 30 " + currentTime)
            //alert("yes!")
        $('.TextBox').css('background-color', 'green')

        if (currentTime === timeArray[value]) {
            console.log("currentTime in document line 30 " + currentTime)
            //alert("yes!")
        $('.TextBox').css('background-color', 'red')
        }

        if (currentTime > timeArray[value]) {
            console.log("currentTime in document line 30 " + currentTime)
            //alert("yes!")
        $('.TextBox').css('background-color', 'gray')
        }
        }

    });
});

    


