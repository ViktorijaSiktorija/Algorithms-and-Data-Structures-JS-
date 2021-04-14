// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    // zovemo insert na root node, unutar root node gledamo vrednost toga i vrednost data koja dolazi u funkciju
    // ako je ta koja dolazi manja, treba da je dodamo na node koji je na levoj strani,
    // ako nema dalje levih nodova treba nam novi nod koji dodelimo levoj strani
    // uz recursion
    // 1 ako trenutni nod ima vrednosti levo i desno
    // ako smo na kraju drveta a tu treba da se doda vrednost
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
    // contains je kao search, dali drvo sadrzi vrednost 3 
    // tada nas ne zanima desna strana jer znamo da je 3 manje od npr 10
    contains(data) {
        if (this.data === data) {
            return this;
        }
        if (this.data < data && this.right) {
            return this.right.contains(data);
        }
        else if (this.data > data && this.left) {
            return this.left.contains(data);
        }
        return null;
    }
}

module.exports = Node;
