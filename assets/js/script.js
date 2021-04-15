var currentDay = document.querySelector("#currentDay")
var today = moment().format("MMMM-D-YYYY")
currentDay.append(today);
var saveBtn = document.querySelector(".saveBtn")
var updater = setInterval(updateHour, 3600000)

$(document).ready(function() {

$(saveBtn).on("click", function(){
    var time = $(this).parent().attr("id")
    var textBox = $(this).siblings(".description").val()

    localStorage.setItem(time, textBox);

    $("hour-9.description").val(localStorage.getItem("hour-9"))
    })})

function updateHour() {

   var current = moment().format("H") 

    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id").split("-")[1]);

        if (hour < current) {
            $(this).addClass(".past");
        } else if (hour === current) {
            $(this).removeClass(".past"),
            $(this).addClass(".present");
        } else (hour > current); {
            $(this).removeClass(".past"),
            $(this).removeClass(".present"),
            $(this).addClass(".future")
        }
})}
