const submitButton = document.getElementById("submitButton");
const resultMessage = document.getElementById("result");

submitButton.addEventListener("click", () => {
    const color1 = document.getElementById("Color1").value.toLowerCase();
    const color2 = document.getElementById("Color2").value.toLowerCase();
    const colorCombination = color1 + " && " + color2;

    switch (colorCombination) {
        case "red && blue":
            resultMessage.textContent = "Mixture of red and blue is purple";
            break;
        case "red && yellow":
            resultMessage.textContent = "Mixture of red and yellow is orange";
            break;
        case "blue && yellow":
            resultMessage.textContent = "Mixture of blue and yellow is green";
            break;
        default:
            resultMessage.textContent = "Invalid Color Combination";
            break;
    }
});
