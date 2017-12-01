var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

// This is a var that lets me know to get the html ID in order to print to screen
var hohohoElement = document.getElementById("reindeer");

// because one array is shorter than the other, i needed an if/else
// I also had to create another var for the shorter array
let shortArr = [];
if(reindeer.length < colors.length) {
    shortArr = reindeer;
} else {
    shortArr = colors;
}

// instead of have i less than reindeer.length, it now needs to be less than shortarr.length
for (i = 0; i < shortArr.length; i++) {

    hohohoElement.innerHTML += '<div>' + colors[i] + ' ' + reindeer[i] + '</div>';

    // console.log(reindeer[1]);
    // console.log(colors[1]);

}
    