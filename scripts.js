$(document).ready(function() {
    var timerOn = false;
    var breakOn = false;
    var secs = parseInt($("#timeControl").text()) * 60;
    var intervId = null;

    function counter() {
        secs -= 1;
        var minutes = Math.floor(secs / 60);
        var seconds = Math.floor(secs - minutes * 60);

        $("#mainDisplay").text(minutes + ":" + seconds);
        if (secs == 0) {
            
            clearInterval(intervId);

            if (breakOn) {
                breakOn = false;
                timerTime();
            }
            else if (timerOn) {
                timerOn = false;
                breakTime();
            }
            
        }
    }

    function timerTime() {
        $("#sessType").text("Session");
        breakOn = false;
        timerOn = true;
        secs = parseInt($("#timeControl").text()) * 60;
        intervId = setInterval(counter,1000);
    }

    function breakTime() {
        $("#sessType").text("Break");
        timerOn = false;
        breakOn = true;
        secs = parseInt($("#breakControl").text()) * 60;
        intervId = setInterval(counter,1000);
        
    }

    $("#start").click(function() {
         if (breakOn){
            
         } else if (!timerOn) {
            timerOn = true;
            intervId = setInterval(counter, 1000);
         } else {
            timerOn = false;
            if (intervId) {
                clearInterval(intervId);
            }

        }
    });

    $("#timeUp").click(function() {
        if (!timerOn && !breakOn) {
            var display = $("#timeControl");
            display.text(parseInt(display.text()) + 1);
            secs = parseInt(display.text() * 60);
            
        }
    });

    $("#timeDown").click(function () {
        if (!timerOn && !breakOn) {
            var display = $("#timeControl");
            display.text(parseInt(display.text()) - 1);
            secs = parseInt(display.text() * 60);
            
        }
    });

    $("#breakUp").click(function () {
        if (!timerOn && !breakOn) {
            var display = $("#breakControl");
            display.text(parseInt(display.text()) + 1);
            secs = parseInt(display.text() * 60);

        }
    });

    $("#breakDown").click(function () {
        if (!timerOn && !breakOn) {
            var display = $("#breakControl");
            display.text(parseInt(display.text()) - 1);
            secs = parseInt(display.text() * 60);

        }
    });
})