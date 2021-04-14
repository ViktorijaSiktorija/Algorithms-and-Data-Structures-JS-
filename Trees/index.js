// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree



class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
    // add - sa datom da se napravi nov nod i doda na trenutni nod "deca" arej
    // npr paren node 123 data children ref [] i child 789 children []
    // add doda jos jedno dete 456 children []
    add(data) {
        this.children.push(new Node(data));
    }
    // remove - sa datom , gledaj svako dete trenutnog noda, i remove bilo koji nod sa data===data
    // stavimo 4,5,6 ako smo to stavili kao data,to brisemo
    remove(data) {
        this.children = this.children.filter(node=> {
            return node.data !== data; //true za svaki el koji nije jednak dati,ako je falsy,remove
        });
    }
}
// root properti sa traverse metodom, 0 referenca na root/glavu drveta
// metode - za iteraciju kroz nodove drveta

class Tree {
    constructor() {
        this.root = null; // empty root properti
    }
    // ako pozovemo metodu treba da se pozove za svaki node
    // tree.traverseBF((node)=>{node.data+=10}) svaki br u drvetu +10
    // algoritam: stvorimo [], uzemo root node drveta, i stavimo ga u arej
    // onda iteracija kroz arej, while ima elemenata u areju, uzmi prvi element, vrati svu njegovu decu,i stavi decu u arej
    // npr 20-0,40,-15
    // zovemo funkciju sa node 20, bacimo taj node, ako ima elemenata, idi kroz jos 2 iteraciju, uzmi 1 el uzmi decu i stavi decu
    // u arej
    // i tako dalje do kraja
    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift(); // skida 1. element areja
            arr.push(...node.children); // uzmi sve elemente iz tog areja, jer je node.children arej, i push u arr,isto kao da smo for napravili
            fn(node); // zovemo funkciju sa node 20
        }
    }
    // depth-first order lici na BF
    // arej, pocinjemo od root node, stavimo ga tu
    // u while, dok arej ima elemente, skidamo 1. el i uzmimamo mu decu i stavljamo u arej
    // sledeci nod, razlika u tome sto nije push (na kraj areja), stavljamo decu na pocetak
    // od 12,-2,1 nemaju decu bacaju se, 40 nema decu, -15 ima dete -2, stavimo -15 u arej i -2 na start
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children); // unshift stavlja na pocetak areja
            fn(node);
        }
    }
}


module.exports = { Tree, Node };
