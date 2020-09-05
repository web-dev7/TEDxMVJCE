const btnhamburger= document.querySelector('#btnhamburger');
const body=document.querySelector('body');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const fadeelems=document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click',function(){
    console.log('click hamburger');



    if(header.classList.contains('open')){//close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeelems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
    

        });
       
    }
    else{//open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeelems.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        });
        

    }
   
});


// Set the date we're counting down to
var countDownDate = new Date("Sept 31, 2020 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);