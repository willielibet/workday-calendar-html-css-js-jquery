
$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
    
})

var timeArray = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"]
var currentTime = moment().format("h A");

//gives the current time to the hour. for example 11 PM.
//The each() method specifies a function to run for each matched element.
//source: https://www.w3schools.com/jquery/misc_each.asp.
//Syntax:  $(selector).each(function(index,element))
$(".TIME").each(function(i){
    //current hour (see line 5 to display it in the browser).
   $(this).text(moment().hour(i+9).format("h A"));
    
})

// console.log(currentTime)
//console.log("value of each function " + each())
    


