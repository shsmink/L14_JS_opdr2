// No arguments

// const paintingWalls = function() {
//     console.log("The wall has been painted red");
// }

// paintingWalls();


// Single argument

// const paintingWalls = function(color) {
//     console.log("The wall has been painted " + color);
// }

// paintingWalls("green");
// paintingWalls("blue");
// paintingWalls();

// // 7. zonder een argument komt er nu undefined te staan op de plaats van de kleur.


// Multiple arguments

// const paintingWalls = function (side, color) {
//     console.log("The " + side + " wall has been painted " + color);
// }

// paintingWalls("north", "orange");
// paintingWalls("south-east", "grey");

// 6. de volgorde van de arguments bepaalt welk argument als eerste of als laatste wordt gebruikt.
// 7. paintingWalls("grey", "south-east");  >>  The grey wall has been painted south-east
// 8. de arguments worden alsnog op het juiste moment aangeroepen. Ze zijn afhankelijk van hun volgorde gekoppeld aan de arguments in de functie. In welke volgorde deze vervolgens gelogd worden, maakt niet uit. 

const paintingWalls = function (color, side) {
    console.log("The " + side + " wall has been painted " + color);
}

paintingWalls("orange", "north");

// The north wall has been painted orange
