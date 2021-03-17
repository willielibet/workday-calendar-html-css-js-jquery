$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
})

//my array representing the blocks in the calendar.
let timeArray = [9, "10", "11", "12", "13", "14", "15", "16", "17"]
//current time in military time.
let currentTime = moment().format("H");
//let currentTime = moment().add(0, 'hours').format("H");
//console.log("l-12 currentTime " + currentTime)

//calendar is green from 1am to 9am
if (currentTime >= 0 && currentTime < 9) {

    for (i=0; i < timeArray.length; i++) {
  
    $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'MediumSeaGreen')
    }

} 

//calendar is gray from 6pm to 12am
if (currentTime >= 18  && currentTime < 24) {

    for (i=0; i < timeArray.length; i++) {
    $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'Gray')
    }

} 

    //takes care of calendar colors from 9am to 1am
if (currentTime > 9 && currentTime < 18) {
    for (i=0; i < timeArray.length; i++) {    

        console.log("l-41 currentTime " + currentTime + " and timeArray " + timeArray[i])
        if (currentTime < timeArray[i]) {
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'MediumSeaGreen')
            console.log("l-44 currentTime " + currentTime + " > timeArray " + timeArray[i])
        } 
        else if (currentTime == timeArray[i]) {
            $(`.TextBoxColors-${currentTime}`).css('background-color', 'Tomato')
            console.log("l-48 currentTime " + currentTime + " == timeArray " + timeArray[i])
        } 
        if (currentTime > timeArray[i]) {
                $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'Gray')
                console.log("currentTime l-52 " + currentTime + " < timeArray " + timeArray[i])
        } 
    }
}

//shows tomato at 9am
if (currentTime == 9) {
    $(`.TextBoxColors-${timeArray[0]}`).css('background-color', 'Tomato')

    for (i=1; i < timeArray.length; i++) {
        $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'MediumSeaGreen')
    }
} 

//localStorage.setItem("item", JSON.stringify(localS));

//var savedTodo = JSON.parse(localStorage.getItem("todo"))

//source:
//https://www.tiny.cloud/blog/javascript-localstorage/
//myLoad()

// function mySave() {
//     var myContent = document.getElementsByClassName("btnlocalStorage").value;
//     localStorage.setItem("myContent", myContent);
// }

// function myLoad() {
//     //var myContent = JSON.parse(localStorage.getItem("myContent"));
//     document.getElementByClass(".btnlocalStorage").value = myContent;
// }

//myLoad();

showLocalStorage()

$(document).ready(function(){
    $(".btnlocalStorage").on("click", function() {
        localStorage.setItem("myContent09", $("#TextBoxStorage-09").val());
        localStorage.setItem("myContent10", $("#TextBoxStorage-10").val());
        localStorage.setItem("myContent11", $("#TextBoxStorage-11").val());
        localStorage.setItem("myContent12", $("#TextBoxStorage-12").val());
        localStorage.setItem("myContent13", $("#TextBoxStorage-13").val());
        localStorage.setItem("myContent14", $("#TextBoxStorage-14").val());
        localStorage.setItem("myContent15", $("#TextBoxStorage-15").val());
        localStorage.setItem("myContent16", $("#TextBoxStorage-16").val());
        localStorage.setItem("myContent17", $("#TextBoxStorage-17").val());
    })
});

//this works
$(document).ready(function(){
    $(".btnlocalStorage").on("click", function() {
        localStorage.setItem($(this).prop("id"), $(this).prev().val());
        console.log(localStorage.getItem($(this).prop("id")));
    })
});

function showLocalStorage() {
    var myContent09 = localStorage.getItem("myContent09");
    var myContent10 = localStorage.getItem("myContent10");
    var myContent11 = localStorage.getItem("myContent11");
    var myContent12 = localStorage.getItem("myContent12");
    var myContent13 = localStorage.getItem("myContent13");
    var myContent14 = localStorage.getItem("myContent14");
    var myContent15 = localStorage.getItem("myContent15");
    var myContent16 = localStorage.getItem("myContent16");
    var myContent17 = localStorage.getItem("myContent17");

    $('#TextBoxStorage-09').val(myContent09);
    $('#TextBoxStorage-10').val(myContent10);
    $('#TextBoxStorage-11').val(myContent11);
    $('#TextBoxStorage-12').val(myContent12);
    $('#TextBoxStorage-13').val(myContent13);
    $('#TextBoxStorage-14').val(myContent14);
    $('#TextBoxStorage-15').val(myContent15);
    $('#TextBoxStorage-16').val(myContent16);
    $('#TextBoxStorage-17').val(myContent17);
}