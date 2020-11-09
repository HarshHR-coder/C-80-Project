var inputs = [];

function getparagraph1() {
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
        inputs.join(". ");
        document.getElementById("showparagraph1").innerHTML = inputs.join(". ");
    }
}