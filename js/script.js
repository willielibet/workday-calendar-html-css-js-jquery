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
    for (i=0; i < 9; i++) {

        //console.log("currentTime in document line 24 " + currentTime)
        //console.log("indexOf in document line 24 " + timeArray.indexOf(1))
        //if (currentTime < parseInt(timeArray.indexOf(currentTime))) {
        if (currentTime > timeArray[i]) {
            //console.log("currentTime in document line 132 " + currentTime)
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'gray')
        }
        if (currentTime === timeArray[i]) {
            //console.log("currentTime line 34 " + currentTime)
            $(`.TextBoxColors-${currentTime}`).css('background-color', 'Tomato')
        }
        
        if (currentTime < timeArray[i]) {
            let value = timeArray[i];
            //let value = timeArray.indexOf("currentTime",currentTime);
            console.log("currentTime in document line 30 " + currentTime)
            $(`.TextBoxColors-${value}`).css('background-color', 'green')
        }
}