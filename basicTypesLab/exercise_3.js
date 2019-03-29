var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Orange"] = 2] = "Orange";
    Colors[Colors["Red"] = 3] = "Red";
})(Colors || (Colors = {}));
var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        if (typeof (color) === 'number') {
            return true;
        }
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    return colorChange;
}());
var numericColor = /** @class */ (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize;
        _this.div.style.height = squareSize;
        return _this;
    }
    numericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    numericColor.Colors = Colors;
    return numericColor;
}(colorChange));
var elementSet = [];
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
for (var index = 0; index < 4; index++) {
    elementSet.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
elementSet.map(function (elem, index) {
    var colorChangeClass = new numericColor(elem.div);
    elem.button.textContent = "Change Color";
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(getRandomIntInclusive(0, 3));
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
