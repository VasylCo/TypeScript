enum Numbers {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}

interface diceElem {
    'div': Element
    'p': Element
}

class diceInit {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
}

class diceSet extends diceInit {
    squareSizeNum: number = 100;
    squareSize: string = `${this.squareSizeNum}px`;
    //static Numbers = Numbers;
    constructor (div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = this.squareSize;
        (this.div as HTMLElement).style.height = this.squareSize;
        (this.div as HTMLElement).style.border = "10px solid black";
        //(this.div as HTMLElement).style.margin = "15px";
        (this.div as HTMLElement).style.display = "flex";
        (this.div as HTMLElement).style.justifyContent="center";
        (this.div as HTMLElement).style.alignItems="center";
        (this.div as HTMLElement).style.fontSize = "36px";
        //diceSet.setNumber(this.div);
    }
    static setNumber(div: Element): boolean {
        let chance = Math.floor((Math.random() * (6 - 1)) + 1);
        (div as HTMLElement).textContent = (Numbers[chance] as string);
        return true;
    }
}

let parentDiv: Element = document.createElement('div');
(parentDiv as HTMLElement).style.display = 'flex';
(parentDiv as HTMLElement).style.flexWrap = 'wrap';
(parentDiv as HTMLElement).style.alignItems = 'center';
(parentDiv as HTMLElement).style.justifyContent = 'space-between';


let dices: Array<diceElem> = [];
for (let i: number = 0; i<4; i++) {
    dices.push({'div': document.createElement('div'),
'p': document.createElement('p')});
}

dices.map((elem)=>{
    let setNewDice = new diceSet(elem.div);
    diceSet.setNumber(elem.p);
    elem.div.appendChild(elem.p);
    parentDiv.appendChild(elem.div);
    
})

let button: Element = document.createElement('button');
button.textContent = "Roll The Dices";
(button as HTMLElement).style.fontSize = "24px";
(button as HTMLElement).style.padding = "5px";
(button as HTMLElement).style.display = "inline-block";
(button as HTMLElement).style.height = "50px";
(button as HTMLElement).onclick = (event) => {
    return dices.map((elem) => diceSet.setNumber(elem.p));
}
parentDiv.appendChild(button);
document.body.appendChild(parentDiv);
