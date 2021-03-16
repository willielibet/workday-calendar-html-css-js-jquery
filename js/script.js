$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
})

let timeArray = [01, 02, 03, 04, 05, 06, 07, 08, 09,"10", "11", "12", "13", "14", "15", "16", "17"]
let currentTime = moment().format("H");

    for (i=0; i < 18; i++) {
        console.log("i =" +i)      

        console.log("l-41 currentTime " + currentTime + " and timeArray " + timeArray[i])
        if (currentTime > timeArray[i]) {
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'Gray')
            console.log("l-44 currentTime " + currentTime + " < timeArray " + timeArray[i])
        } 
        else if (currentTime === timeArray[i]) {
            $(`.TextBoxColors-${currentTime}`).css('background-color', 'Tomato')
            console.log("l-48 currentTime " + currentTime + " == timeArray " + timeArray[i])
        } 
        else { //if (currentTime < timeArray[i]) {
                $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'MediumSeaGreen')
                console.log("currentTime l-52 " + currentTime + " < timeArray " + timeArray[i])
        } 
        // else {
        // }
}

//localStorage.setItem("item", JSON.stringify(localS));

//var savedTodo = JSON.parse(localStorage.getItem("todo"))

//source:
//https://www.tiny.cloud/blog/javascript-localstorage/
myLoad()

function mySave() {
    var myContent = document.getElementById("TextBoxStorage-17").value;
    localStorage.setItem("myContent", myContent);
}

function myLoad() {
    var myContent = localStorage.getItem("myContent");
    document.getElementById("TextBoxStorage-17").value = myContent;
}