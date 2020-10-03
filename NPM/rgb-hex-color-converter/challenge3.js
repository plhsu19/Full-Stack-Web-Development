// Question 3: Write a function that converts HEX to RGB. 
// Then Make that function autodect the formats so that if you enter HEX color format it returns RGB 
// and if you enter RGB color format it returns HEX. Bonus: Release this tool as a npm package.

// helper function convert Hex to RGB format
// input: String in RGB format
// output: String in HEC format
function convertToRGB(hex) {
    let red = parseInt(hex.slice(1, 3), 16)
    let green = parseInt(hex.slice(3, 5), 16)
    let blue = parseInt(hex.slice(5, 7), 16)
    let rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgbColor
}

// helper function convert RGB to HEX
function convertToHEX(rgb) {

    // strip the "rgb(" and ")" in the string
    let rgbStriped = rgb.replace("rgb(", "")
    rgbStriped = rgbStriped.replace(")", "")

    // split the string by ","
    let colorArray = rgbStriped.split(",")

    // parse the string -> decimal number -> hex string -> uppercase string
    let red = stringToHexString(colorArray[0])
    let green = stringToHexString(colorArray[1])
    let blue = stringToHexString(colorArray[2])

    // return the HEX format color string
    return "#" + red + green + blue
}

// helper function to convert string type number to HEX string
function stringToHexString(stringNumber) {
    let stringHEX = parseInt(stringNumber).toString(16).toUpperCase();
    return (stringHEX.length === 2 ? stringHEX : 0 + stringHEX)
}

// function automatically convert the color format
function convertFormat(color) {
    let convertedColor = ""

    // check the format, and convert the format respectively
    if (color[0] === "#" || color.length === 7) convertedColor = convertToRGB(color);
    else if (color.slice(0, 3) === "rgb") convertedColor = convertToHEX(color);
    else throw new Error("The input format is not HEX nor RGB");

    return convertedColor;
}

// unit tests
// let colorRGB = "rgb(0, 255, 255)" 
// let colorHEX = "#FF4500"
// let colorWrongFormat = "108, 30, 200"

// console.log("convert RGB color " + colorRGB + " to HEX: " + convertFormat(colorRGB)); // should print #00FFFF
// console.log("convert HEX color" + colorHEX + " to RGB: " + convertFormat(colorHEX)); // should print rgb(255, 69, 0)
// console.log("wrong format input: " + convertFormat(colorWrongFormat));
