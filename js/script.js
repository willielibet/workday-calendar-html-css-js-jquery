$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
    
})

let timeArray = ["9","10", "11", "12", "13", "14", "15", "16", "17"]
// let i = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let currentTime = moment().format("H");
////console.log("currentTime line 10 " + currentTime);
//console.log("array line 11 " + timeArray[0]);


//$(document).ready(function() {
    //console.log("currentTime in document line 122 " + currentTime)
//$('.Timer').each( timeArray, function(timeArray) {
        //console.log("currentTime in document line 18 " + currentTime)
        //console.log("timeArray document line 125 " + timeArray)
        //console.log("indexOf line 130" + timeArray.indexOf(currentTime));
    //for (i=0; i < 9; i++) {
        let i=0;
        while (i<9) {

        //console.log("currentTime in document line 24 " + currentTime)
        //console.log("indexOf in document line 24 " + timeArray.indexOf(1))
        //if (currentTime < parseInt(timeArray.indexOf(currentTime))) {
        //if (currentTime > timeArray[i]) {
            
           // $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'gray')
        //}
        if (currentTime > parseInt(timeArray[0])) {
            $(`.TextBoxColors-${timeArray[0]}`).css('background-color', 'gray')
        }
        else if (currentTime === timeArray[0]) {
            $(`.TextBoxColors-${currentTime}`).css('background-color', 'Tomato')
        }
        else if (currentTime < timeArray[0]) {
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'green')
        }
        else {
        }

        console.log("timeArray l-30 " + timeArray[i])
        if (currentTime > timeArray[i]) {
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'gray')
            console.log("currentTime l-32 " + currentTime)
            console.log("timeArray l-33 " + timeArray[i])
        } 
        else if (currentTime === timeArray[i]) {
            //console.log("currentTime line 34 " + currentTime)
            $(`.TextBoxColors-${currentTime}`).css('background-color', 'Tomato')
        } 
        else if (currentTime < timeArray[i]) {
            // console.log("timeArray l34 " + timeArray[i])
            // console.log("currentTime l-42 " + currentTime)
            // console.log("timeArray l-42 " + timeArray[i])
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'green')
        } 
        else {
        }
        i++
}