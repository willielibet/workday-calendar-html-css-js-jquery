$(document).ready(function(){
    /* shows current day of the week, month and day of the month in the browser */
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // $("#currentDay").text(moment().hour(1+9).format("h A"));
})

let timeArray = [09, "10", "11", "12", "13", "14", "15", "16", "17"]

let currentTime = moment().format("H");

//calendar is green from 1am to 9am
if (currentTime >= 1 && currentTime < 9) {

    for (i=0; i < 9; i++) {
    //console.log("currentTime is greater " + currentTime)
    $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'MediumSeaGreen')
    }

} else {
    //takes care of calendar colors from 9am to 1am
    for (i=0; i < 9; i++) {    

        console.log("l-41 currentTime " + currentTime + " and timeArray " + timeArray[i])
        if (currentTime > timeArray[i]) {
            $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'Gray')
            console.log("l-44 currentTime " + currentTime + " > timeArray " + timeArray[i])
        } 
        else if (currentTime === timeArray[i]) {
            $(`.TextBoxColors-${currentTime}`).css('background-color', 'Tomato')
            console.log("l-48 currentTime " + currentTime + " == timeArray " + timeArray[i])
        } 
        else { //if (currentTime < timeArray[i]) {
                $(`.TextBoxColors-${timeArray[i]}`).css('background-color', 'MediumSeaGreen')
                console.log("currentTime l-52 " + currentTime + " < timeArray " + timeArray[i])
        } 
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


 $(document).ready(function() {

    $(".btnlocalStorage").on("click", function() {
        event.preventDefault();
        console.log("I am clicked!")
       var myContent = $(this).val();
       localStorage.setItem("myContent", myContent);
       //localStorage.setItem("myContent", JSON.stringify(myContent));
    })

})


//myLoad();


//good
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

       
        var myContent09 = JSON.parse(localStorage.getItem("myContent09"));
        //document.getElementByClass("#TextBoxStorage-09").value = myContent09;
// }

//         // console.log(localStorage.getItem("myContent09"));
//         // console.log(localStorage.getItem("myContent10"));
//         // console.log(localStorage.getItem("myContent11"));
//         // console.log(localStorage.getItem("myContent12"));
//         // console.log(localStorage.getItem("myContent13"));
//         // console.log(localStorage.getItem("myContent14"));
//         // console.log(localStorage.getItem("myContent15"));
//         // console.log(localStorage.getItem("myContent16"));
//         // console.log(localStorage.getItem("myContent17"));
    })
});

// function myLoad() {
//     JSON.parse(localStorage.getItem("myContent09"));
//     //let myContent = JSON.parse(localStorage.getItem("myContent09"));
//     //document.getElementById("#TextBoxStorage-09").value = myContent;
//     //$(".btnlocalStorage").val(myContent);
// }


// $(document).ready(function() {
//     $(".btnlocalStorage").on("click", function() {
//         event.preventDefault();
//         console.log("I am clicked!")
//        var myContent = $(this).prev().val();
//        localStorage.setItem("myContent", myContent);
    //    localStorage.setItem("myContent", myContent10);
    //    localStorage.setItem("myContent", myContent11);
    //    localStorage.setItem("myContent", myContent12);
    //    localStorage.setItem("myContent", myContent13);
    //    localStorage.setItem("myContent", myContent14);
    //    localStorage.setItem("myContent", myContent15);
    //    localStorage.setItem("myContent", myContent16);
    //    localStorage.setItem("myContent", myContent17);
       //localStorage.setItem("myContent", JSON.stringify(myContent));
//     });
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