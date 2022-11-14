/*    
    John Stirrat
    CPSC 332 Web Development
    HW6 - Jquery Stopwatch
    HW6 Starter code
    Modified from: https://codepen.io/cathydutton/pen/GBcvo
*/

$(document).ready(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens")
    var $appendSeconds = $("#seconds")
    var $buttonStart = $('#button-start');
    var $buttonStop = $('#button-stop');
    var $buttonReset = $('#button-reset');
    var interval;
    var interval2;
    var changed = false;

    $("#timer").addClass("timer-background")

    $buttonStart.addClass("btn")
    $buttonStop.addClass("btn")
    $buttonReset.addClass("btn")

    $(".btn").css({
        border: ".1px solid rgb(255, 0, 212)",
        backgroundColor: "black",
        color: "rgb(255, 0, 212)",
        boxShadow: "1px 1px rgb(255, 0, 212) inset"
    })

    $("h1, h2").css({
        texShadow: "3px 3px 3px rgb(255, 0, 221)",
        textStrokeWidth: "1px",
        textStrokeColor: "black"
    })

    $(".wrapper").css({
        border: "20px groove rgb(255, 0, 212);",
        padding: "10px",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
        backgroundImage: "radial-gradient(rgb(0, 0, 0), rgb(77, 38, 65), rgb(226, 112, 192))"
    })


    $buttonStart.click(function () {
        clearInterval(interval);
        clearInterval(interval2);
        interval = setInterval(startTimer, 10);
        interval2 = setInterval(changeOpacity, 500);
        $(".timer-background").css("backgroundColor", "rgb(255, 0, 212)");
    })

    $buttonStop.click(function () {
        clearInterval(interval);
        clearInterval(interval2);
        if ($("#tens").text() != "00" || $("#seconds").text() != "00") {
            $(".timer-background").css("backgroundColor", "rgba(128, 11, 11, 1)");
        }
        $(".timer-background").css({ opacity: 1 })
    })

    $buttonReset.click(function () {
        clearInterval(interval);
        clearInterval(interval2);
        tens = "00";
        seconds = "00";
        $appendTens.text(tens);
        $appendSeconds.text(seconds);
        $(".timer-background").css("backgroundColor", "rgb(58, 55, 55)");
        $(".timer-background").css({ opacity: 1 })
    })

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.text("0" + tens);
        }

        if (tens > 9) {
            $appendTens.text(tens);

        }

        if (tens > 99) {
            seconds++;
            $appendSeconds.text("0" + seconds);
            tens = 0;
            $appendTens.text("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }

    function changeOpacity() {
        if (changed) {
            $(".timer-background").css({ opacity: 1 })
            changed = false
        }
        else {
            $(".timer-background").css({ opacity: .8 })
            changed = true
        }
    }
})