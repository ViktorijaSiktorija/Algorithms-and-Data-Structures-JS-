// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// circular - nema tail node, poslednji node koji mozda slucajno pokazuje na raniji nod u LL
// ovde nema null tj tail pokazuje na null, iteracija bi bila beskonacna
// 2 pointera, slow i fast, slow da gleda u 1. nod i fast da gleda u sledeci
// ako su sledeca 2 posle fast defined, ulazi u for loop, 
// slow ide po 1 napred
// onda check, da li slow i fast gledaju u isti nod, u drugom slucaju nastavlja se iteracija
// ako jesu defined za fast ide dalje 2, slow napred po 1, check dal gledaju u isti nod
// ne gledaju, ponovo iteracija sve isto, ako gledjau oba u isto vreme znaci da imamo circ LL

function circular(list) {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) { // dal je identicni nod
            return true;
        }
    }
    return false;
}

module.exports = circular;
