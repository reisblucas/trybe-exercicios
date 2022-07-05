"use strict";
var ERainbow;
(function (ERainbow) {
    ERainbow[ERainbow["Red"] = 0] = "Red";
    ERainbow[ERainbow["Orange"] = 1] = "Orange";
    ERainbow[ERainbow["Yellow"] = 2] = "Yellow";
    ERainbow[ERainbow["Green"] = 3] = "Green";
    ERainbow[ERainbow["Blue"] = 4] = "Blue";
    ERainbow[ERainbow["Indigo"] = 5] = "Indigo";
    ERainbow[ERainbow["Violet"] = 6] = "Violet";
})(ERainbow || (ERainbow = {}));
const rainbowKeys = Object.keys(ERainbow);
console.log(rainbowKeys);
let rainbowColor;
for (let i = 0; i < rainbowKeys.length; i += 1) {
    const actualPosition = rainbowKeys[i];
    rainbowColor = ERainbow[actualPosition];
    console.log(`Rainbow color:`, rainbowColor);
}
