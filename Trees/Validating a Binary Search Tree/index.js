// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// recursion
// min i maks vrednosti
// krecemo od root node, vrednosti ispod odredjuju validnost
// od root ka levo, vrednosti moraju da bduu manje od root value, maks value uvek manja od root max=10 npr
// do node 0, uporedimo sa maks, manje je, onda dole idalje levo, sledeci je -1 0 je sada maks vrednost
// -1 nema levu stranu, ima desnu, kada idemo desno dete mora da bude vece od -1, min je sada -1
// 15 - mora vise od -1 al manje od 0, nije match,vece je od -1 i 0, nije validno BST

function validate(node, min = null, max = null) {
    // prvi korak, next node 0 razume da je max vrednost 10 npr
    // levo maks update, desno min value update
    if (max !== null && node.data > max) {
        return false;
    }

    if (min !== null && node.data < min) {
        return false;
    }

    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }

    if (node.right && !validate(node.right, max, node.data)) {
        return false;
    }

    return true;
}

module.exports = validate;
