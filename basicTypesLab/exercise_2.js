var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
var elementSet = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
for (var index = 0; index < 4; index++) {
    elementSet.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
elementSet.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    elem.div.style.width = squareSize;
    elem.div.style.height = squareSize;
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Orange"] = 2] = "Orange";
    Colors[Colors["Red"] = 3] = "Red";
})(Colors || (Colors = {}));
