var currentDay =$("#currentDay")
//var currentDay = document.querySelector("#currentDay")
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
// wasn't sure how to make line 3 in jquery syntax
currentDay.append(today);
var saveBtn = $(".saveBtn")
//var saveBtn = document.querySelector(".saveBtn")
var update = setInterval(updateHour, 3600000)
// update every hour in milliseconds

$(document).ready(function() {
//jQuery detects this state of readiness

$(saveBtn).on("click", function(){
    var time = $(this).parent().attr("id")
    // pulling the parent of my hour-9 so that no loop is needed
    var textBox = $(this).siblings(".description").val()
    // value fro mthe textBox, it's the sibling of the "time" var as well

    localStorage.setItem(time, textBox);
    // set key, value
})})

function updateHour() {

   var current = moment().hour();
   //console.log(current)
    $(".time-block").each(function() {
       var hour = parseInt($(this).attr("id").split("-")[1]);
        if (hour < current) {
            $(this).addClass("past")
        } else if (hour === current) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else { (hour > current) 
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
            //console.log(hour)
        } 
})}

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
// not sure if I could have made a loop for this

updateHour();