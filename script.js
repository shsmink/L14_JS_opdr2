/*
// No arguments

const paintingWalls = function() {
    console.log('The wall has been painted red');
}

paintingWalls();

// Single argument

const paintingWalls = function(colors) {
    console.log("The wall has been painted " + colors);
}

paintingWalls("green");
paintingWalls("blue");

// zonder de arguments gebeurt er niks

*/

// Multiple arguments

const paintingWalls = function (side, color) {
    console.log("The " + side + " wall has been painted " + color);
}

paintingWalls("north", "orange");
paintingWalls("south-east", "grey");
