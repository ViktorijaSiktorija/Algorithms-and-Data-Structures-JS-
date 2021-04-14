// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

// define center node, 2 temp promenljive slow i fast
// uzmu se i povezu sa prvim node, asign slow = 1. node i fast = 1. node
// iterate kroz LL, za svaki korak iteracije (while) slow ce ici 1 el napred
// a fast napred kroz 2 elementa
// kako fast dodje do sledeceg, proveravamo dalje sledeci node defined i node posle tog, tj dal postoje (next to fast)
// ako postoje nastavljamo iteraciju, ako ne postoje fast je verovatno na kraju LL, slow je na mid point
// kada fast dodje do poslednjeg nisu dalje defined, znaci na kraju smo ll, slow je na sredini jer se pomera duplo sporije u odnosu na slow
// nebitno dal su parni il neparni node

function midpoint(list) {
    let slow = list.getFirst(); //ili list.head
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

module.exports = midpoint;
