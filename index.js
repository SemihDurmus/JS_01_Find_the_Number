

const random_nr = Math.floor(Math.random() * 10) + 1;
console.log("random_nr : ", random_nr);
var counter = 1; 
const check_btn = document.getElementById("check");
const reset_btn = document.getElementById("reset");
const input_area = document.getElementById("inp");
const directions_area = document.getElementById("directions");


input_area.addEventListener("keyup", function(evt) {    // Keyup -> Any key pressed
    if (evt.key === 'Enter') {  
        evt.preventDefault();                        
        check_btn.click();
    }
});


check_btn.addEventListener("click", nr_checker);
reset_btn.addEventListener("click", reset_page);

function nr_checker() {
    let guess = parseInt(input_area.value);
    console.log("guess: " + guess);
    check_btn.focus();

    if (! isNaN(guess)) {
        if (guess == random_nr) {

            reset_btn.style.display = "inline-block";
            check_btn.style.display = "none";
            reset_btn.focus();

            if (counter <= 3) {
                directions_area.innerHTML = "Congrats!! You found the number in " + counter + ". attepmt!"
            } else if (counter < 5){
                directions_area.innerHTML = "You found the number in " + counter + ". attepmt. Not bad"
            } else {
                directions_area.innerHTML = "You found the number in " + counter + ". attepmt. <br> Could be better next time."
            }
        } else if (guess < random_nr) {
            directions_area.innerHTML = "You should go up!";
            input_area.value = "";
            input_area.focus();
            counter++;
        } else {
            directions_area.innerHTML = "You should go down!";
            counter++;
            input_area.value = "";
            input_area.focus();
        }
    } else {
        alert("This is not a number");
        input_area.value = "";
        input_area.focus();
    }
}

function reset_page() {
    location.reload();
} 