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
var Numbers;
(function (Numbers) {
    Numbers[Numbers["One"] = 0] = "One";
    Numbers[Numbers["Two"] = 1] = "Two";
    Numbers[Numbers["Three"] = 2] = "Three";
    Numbers[Numbers["Four"] = 3] = "Four";
    Numbers[Numbers["Five"] = 4] = "Five";
    Numbers[Numbers["Six"] = 5] = "Six";
})(Numbers || (Numbers = {}));
var diceInit = /** @class */ (function () {
    function diceInit(div) {
        this.div = div;
    }
    return diceInit;
}());
var diceSet = /** @class */ (function (_super) {
    __extends(diceSet, _super);
    //static Numbers = Numbers;
    function diceSet(div) {
        var _this = _super.call(this, div) || this;
        _this.squareSizeNum = 100;
        _this.squareSize = _this.squareSizeNum + "px";
        _this.div.style.width = _this.squareSize;
        _this.div.style.height = _this.squareSize;
        _this.div.style.border = "10px solid black";
        //(this.div as HTMLElement).style.margin = "15px";
        _this.div.style.display = "flex";
        _this.div.style.justifyContent = "center";
        _this.div.style.alignItems = "center";
        _this.div.style.fontSize = "36px";
        return _this;
        //diceSet.setNumber(this.div);
    }
    diceSet.setNumber = function (div) {
        var chance = Math.floor((Math.random() * (6 - 1)) + 1);
        div.textContent = Numbers[chance];
        return true;
    };
    return diceSet;
}(diceInit));
var parentDiv = document.createElement('div');
parentDiv.style.display = 'flex';
parentDiv.style.flexWrap = 'wrap';
parentDiv.style.alignItems = 'center';
parentDiv.style.justifyContent = 'space-between';
var dices = [];
for (var i = 0; i < 4; i++) {
    dices.push({ 'div': document.createElement('div'),
        'p': document.createElement('p') });
}
dices.map(function (elem) {
    var setNewDice = new diceSet(elem.div);
    diceSet.setNumber(elem.p);
    elem.div.appendChild(elem.p);
    parentDiv.appendChild(elem.div);
});
var button = document.createElement('button');
button.textContent = "Roll The Dices";
button.style.fontSize = "24px";
button.style.padding = "5px";
button.style.display = "inline-block";
button.style.height = "50px";
button.onclick = function (event) {
    return dices.map(function (elem) { return diceSet.setNumber(elem.p); });
};
parentDiv.appendChild(button);
document.body.appendChild(parentDiv);
