var place = "second";

/* if (place == "first") {
    console.log("Gold")
} else if (place == "second") {
    console.log("Silver")
} else if (place == "third") {
    console.log("Bronze")
} else {
    console.log("No medal")
} */

switch(place) {
    case "first":
    console.log("Gold");
    break;
    case "second":
    console.log("Silver");
    break;
    case "third":
    console.log("Bronze");
    break;
    default:
    console.log("No medal")
}

var listOfColors = {
    1 : "Green",
    2 : "Red",
    3 : "Brown",
    4 : "Grey"
}
listOfColors[5] = "Blue"
console.log(listOfColors)

var number = Math.max(1, 3, 54, 2, 34)
console.log(number);
var ho = "ho-ho-ho";
console.log(ho.split('-'))

var bolean = true
