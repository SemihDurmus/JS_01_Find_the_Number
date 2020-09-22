

const random_nr = Math.floor(Math.random() * 10) + 1;
console.log("random_nr : ", random_nr);
var counter = 1; 


document.getElementById("check").addEventListener("click", nr_checker);
document.getElementById("reset").addEventListener("click", reset_page);



function nr_checker() {
    let guess = parseInt(document.getElementById("inp").value);
    console.log("guess: " + guess);

    if (! isNaN(guess)) {
        if (guess == random_nr) {

            document.getElementById("reset").style.display = "inline-block";
            document.getElementById("check").style.display = "none";

            if (counter <= 3) {
                document.getElementById("directions").innerHTML = "Congrats!! You found the number in " + counter + ". attepmt!"
            } else if (counter < 5){
                document.getElementById("directions").innerHTML = "You found the number in " + counter + ". attepmt. Not bad"
            } else {
                document.getElementById("directions").innerHTML = "You found the number in " + counter + ". attepmt. <br> Could be better next time."
            }
        } else if (guess < random_nr) {
            document.getElementById("directions").innerHTML = "You should go up!";
            document.getElementById("inp").value = "";
            counter++;
        } else {
            document.getElementById("directions").innerHTML = "You should go down!";
            counter++;
            document.getElementById("inp").value = "";
        }
    } else {
        alert("This is not a number");
        document.getElementById("inp").value = "";
    }
}

function reset_page() {
    location.reload();
} 