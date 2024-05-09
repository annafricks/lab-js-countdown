const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const button = document.getElementById("start-btn");

button.addEventListener("click", () => {
  console.log("Button clicked!")
  startCountdown();
});



// ITERATION 2: Start Countdown
function startCountdown() {
  console.log("startCountdown called!");


  function countdown() {
   
    let count = 10;

    let timerId = setInterval(function() {
        count--;
        console.log(count);

        if(count == 0) {
           clearInterval(timerId);
            count = 10;
            console.log("Lift off!");
            showToast("lift off!");
        }
    }, 1000);
}



// function countdown() {
// 	count--;
// 	document.getElementById("seconds").innerHTML = String( count );
// 	if (count > 0) {
// 		setTimeout(countdown, 1000);
// 	}
// };

// setTimeout(countdown, 1000);



// ITERATION 3: Show Toast
function showToast(message) {
  const toastElement = document.getElementById("toast");
  toastElement.classList.add("show");
  setTimeout(() => {
  toastElement.classList.remove("show");
}, 3000);
}
  console.log("showToast called!");

  countdown();
}





  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...


  