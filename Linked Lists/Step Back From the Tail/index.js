// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// prepostavicemo da zovemo funkc sa n=3
// koji el treba da vratimo, treba da vratimo koji je 3 spejsa udaljen od poslednjeg
// ako je n=0,onda je poslednji
// slow i fast, nece po 2 napred fast al ce biti brzi od slow
// oba da budu jednaka prvom node
// onda uzmemo n=3, to koristimo i kazemo da fast ide 3 koraka napred,
// slow se inicijalizira
// druga faza: slow napreduje i fast jedan po jedan, oba idu po 1 indeks
// da li fast pokazuje na poslednji, ako ne idemo dalje, oba po 1 nod
// ako fast pokazuje na poslednji, to znaci da je slow n elemenata iza njega

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (n > 0){
        fast = fast.next; // time fast napreduje kroz LL, ide brzo n elements napred
        n--; // 1 se kida od n
    }
    while (fast.next){ // dok ima next node 
        slow = slow.next;
        fast = fast.next;
    }
    return slow; // cim fast.next ne postoji tj dodje na poslednji, izadje iz while i treba nam slow 
}

module.exports = fromLast;
