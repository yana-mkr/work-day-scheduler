var currentDay = document.querySelector("#currentDay")
var today = moment().format("MMMM-D-YYYY")
currentDay.append(today);
var saveBtn = $(".saveBtn")
//var saveBtn = document.querySelector(".saveBtn")
var update = setInterval(updateHour, 3600000)

$(document).ready(function() {

$(saveBtn).on("click", function(){
    var time = $(this).parent().attr("id")
    var textBox = $(this).siblings(".description").val()

    localStorage.setItem(time, textBox);
})})

function updateHour() {

   var current = moment().hour();
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

updateHour();