$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
    
})

let timeArray = [9,10, 11, 12, 13, 14, 15, 16, 17]
// let i = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let currentTime = moment().format("H");
console.log("currentTime line 10 " + currentTime)
console.log("array line 11 " + timeArray[0])

// for (i=9; i< 18; i++) {
//     let x = parseInt(i);
//     console.log("the value of i line 14 " +  i)
//     if (currentTime === x) {
//         console.log("currentTime in document line 15 " +  currentTime)
        
//         $(document).ready(function(){
//             console.log("currentTime in document line 19 " +  currentTime)
//             $('.TextBox-11').css('background-color', 'Gray')
//         });
//     }
// }

    // } else if (currentTime > i) {
    //     console.log("currentTime in document line 23 " +  currentTime)
        
        // $(document).ready(function(){
        //     let i=10;
        //     console.log("currentTime in document line 27 " +  currentTime)
        //     $('.TextBox-i').css('background-color', 'MediumSeaGreen')
        // });
    // }


// $(document).ready(function(){
//     console.log("currentTime in document line 15 " +  timeArray[i])
//     $('.TextBox-10').css('background-color', 'Tomato')
// });

// $.each( timeArray, function(value) {
//     if (timeArray[value] === currentTime) {
//         //present: if the current time is the same as the time in the calendar.
//         console.log("currentTime in document line 15 " + currentTime)
//         console.log("timeArray document line 35 " + timeArray)
//         $('.TextBox-10').css('background-color', 'Tomato')
//     }
// });

// $.each( timeArray, function() {
//     if (10 > parseInt(timeArray)) {
//         //present: if the current time is the same as the time in the calendar.
//         console.log("currentTime in document line 15 " + currentTime)
//         console.log("timeArray document line 35 " + timeArray)
//         $('.TextBox').css('background-color', 'Green')
//     }
// });

//gives the current time to the hour for each span element that contains 
//the time in string format. for example 11A M.
//The each() method specifies a function to run for each matched element.
//element - The current element (the "this" selector can also be used).
//source: https://www.w3schools.com/jquery/misc_each.asp.
//Syntax:  $(selector).each(function(index,element))/
// $(".TIME").each(function(i){
//     //current hour (see line 5 to display it in the browser).
//    $(this).text(moment().hour(i+9).format("h A"));
    
// })

// $(document).ready(function(){
    //Source for jQuery.each() iterator function.
    //https://api.jquery.com/jquery.each/
    //iterate over the array timeArray comparing each element with the current time.
    //$('.Timer').each(function(i) {
    //    console.log("currentTime in document line 29 " + currentTime)
    //     console.log("timeArray document line 29 " + timeArray)

        //future (past before): if the current time is later than the time in the calendar.
        // if (timeArray.indexOf(currentTime) === 12) {
        //     console.log("currentTime in document line 82 " + currentTime)
        //     console.log("timeArray document line 83 " + timeArray)
        //     className = 'TextBoxColors-currentTime';
        //     $(`#saveTodo-2`).css('background-color', 'Tomato')
        //     // $(`#saveTodo-${i}`).css('background-color', 'Tomato')
            
        // } 
    

        // if (parseInt(currentTime) === parseInt(timeArray[value])) {
        //     //present: if the current time is the same as the time in the calendar.
        //     console.log("currentTime in document line 40 " + currentTime)
        //     $('.TextBox').css('background-color', 'Tomato')
        // } 
//    });
        //     //past (future before): if it is currently earlier than the time in the calendar.
        // if (parseInt(currentTime) < parseInt(timeArray[value])) {
        //     console.log("currentTime in document line 44 " + currentTime)
        //     $('.TextBox').css('background-color', 'MediumSeaGreen')
        // }
    // });
// });




    // $(document).ready( function() {
    //     $(".button").click(function() {
    //         var inputField = $(".Tbox").val();
    //         $(this).localStorage.setItem("item", inputField);
    //         console.log(localStorage.getItem("item"));
    //     });
    // });

//localStorage.setItem("todoItem", JSON.stringify(todoItem));
// if (currentTime == 12) {
//     console.log("currentTime in document line 132 " + currentTime)
//     //alert("yes!")
// $('.TextBoxColors-12').css('background-color', 'red')
// }


//$(document).ready(function() {
    //console.log("currentTime in document line 122 " + currentTime)
//$('.Timer').each( timeArray, function(value) {
        //console.log("currentTime in document line 124 " + currentTime)
        //console.log("timeArray document line 125 " + timeArray)
        //console.log("indexOf line 130" + timeArray.indexOf(currentTime));
    for (i=0; i< 9; i++) {
        if (currentTime > timeArray.indexOf(i)) {
            console.log("currentTime in document line 132 " + currentTime)
            $('.TextBoxColors-${i}').css('background-color', 'gray')
            $('.TextBoxColors-10').css('background-color', 'gray')
            $('.TextBoxColors-11').css('background-color', 'gray')
        }
        // if (currentTime == timeArray[i]) {
        //     console.log("currentTime in document line 132 " + currentTime)
        //     $('.TextBoxColors-12').css('background-color', 'Tomato')
        // }
        // if (currentTime < timeArray.indexOf(i)) {
        //     //console.log("currentTime in document line 30 " + currentTime)
        //     $('.TextBoxColors-13').css('background-color', 'green')
        //     $('.TextBoxColors-14').css('background-color', 'green')
        //     $('.TextBoxColors-15').css('background-color', 'green')
        //     $('.TextBoxColors-16').css('background-color', 'green')
        //     $('.TextBoxColors-17').css('background-color', 'green')
        // }
    
}
//});
//});