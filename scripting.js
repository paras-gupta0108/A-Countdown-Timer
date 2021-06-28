 // Set the date we're counting down to
 var countDownDate = new Date("25-Dec-2021 00:00:00");

        


 var x = setInterval(function () {


     var now = new Date().getTime();


     var distance = countDownDate - now;

     // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);


     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
         + minutes + "m " + seconds + "s ";

     // If the count down is over, write some text 
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "EXPIRED TIME";
     }
 }, 1000);
