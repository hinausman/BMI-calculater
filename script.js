function bmi() {
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;
    // this is the formula of bmi 
    let bmi = w / (h / 100 * h / 100);
    let total = bmi.toFixed(0);
    document.getElementById("result").innerHTML = "Your BMI is" + total

    // commented 
}

console.log('hellow world')