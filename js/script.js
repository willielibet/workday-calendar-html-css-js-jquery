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
//myLoad()

// function mySave() {
//     var myContent = document.getElementsByClassName("btnlocalStorage").value;
//     localStorage.setItem("myContent", myContent);
// }

// function myLoad() {
//     //var myContent = JSON.parse(localStorage.getItem("myContent"));
//     document.getElementByClass(".btnlocalStorage").value = myContent;
// }

//  $(document).ready(function() {

//     $(".btnlocalStorage").on("click", function() {
//         event.preventDefault();
//         console.log("I am clicked!")
//        var myContent = $(this).(".btnlocalStorage").val();
//        localStorage.setItem("myContent", myContent);
//        //localStorage.setItem("myContent", JSON.stringify(myContent));
//     })

// })

var saveToLocalStorage = jQuery('.parent').find('.form-control')

//good
// $(document).ready(function(){
//     $(".btnlocalStorage").on("click", function() {
//         localStorage.setItem("myContent14", $("#TextBoxStorage-14").val());
//         localStorage.setItem("myContent15", $("#TextBoxStorage-15").val());
//         localStorage.setItem("myContent16", $("#TextBoxStorage-16").val());
//         localStorage.setItem("myContent17", $("#TextBoxStorage-17").val());
//         console.log(localStorage.getItem("myContent14"));
//         console.log(localStorage.getItem("myContent15"));
//         console.log(localStorage.getItem("myContent16"));
//         console.log(localStorage.getItem("myContent17"));
//     })
// });

// $(document).ready(function() {

//     $("[name='myTextArea']").on("click", function() {
//         //var myContent = document.getElementsByClassName("btnlocalStorage").value;
//         //localStorage.setItem("myContent", myContent);
//         console.log("This worked");
//     });
// });




// Event listener to save to local stroage
// $(".saveBtn").click(function () {
//     event.preventDefault();
//     var formValue = $(this).siblings(".form-control").val();
//     console.log("This worked");
//     var listItem = $(this).parent().data("hour");

//     localStorage.setItem(listItem, formValue);
// });



// $('#saveToDo-5pm, #saveToDo-4pm').click(function() {
//     event.preventDefault();
//     let clickedButton = $(this).attr('id').val();
//     console.log(clickedButton);
//     localStorage.setItem("myContent", clickedButton);

// });