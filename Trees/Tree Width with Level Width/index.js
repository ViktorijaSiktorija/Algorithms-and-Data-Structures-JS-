// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// prvi nivo root ima 1 node
// sledeci nivo ima 3 noda
// level su indeksi
// nema tree clas, radimo sa node class
// width - je breadthFrist traversal
// 2 arejs - 1.counters, arej koji drzi sirinu ,koju zelimo da vratimo
// 2. arej, queue koji koristimo za iteraciju
// prvo starter arej, root node, insert random token(npr string)
// counter arej sa starting ideks 0,predstavlja sirinu nivoa
// u while loop uzmemo 20, i bilo koju decu i dodamo ih u arej na kraj
// tad za 1 povecavamo counter, izbacimo 20
// pop sledecu vrednost-s, stoper value,kada vidimo to to znaci da smo na kraju nekog nivoa
// uzmemo s,stavimo na kraj areja, tako da je posle nesto na novom nivou
// dodamo 0 na kraj counter areja - znaci da prelazimo na sledeci nivo drveta
// while - vidimo da je 0 nod,ako ima decu,uzmemo ih i stavimo na kraj areja
// povecamo za 1 vrednost u counter
// ako nemaju decu povecavamo za 1,ako imaju stavljamo u arej
// ako ima samo s tj lenght of 1
// onda imamo counter arej 1 -sirina prvog nivoa, 3 -sirina drugog, 4 - sirina treceg nivoa

function levelWidth(root) {
    const arr = [root,'s'];
    const counters = [0];

    while(arr.length > 1) {
        const node = arr.shift();
        if (node === 's') {
            counters.push(0);
            arr.push('s');
        } else {
            arr.push(...node.children);
            counters[counters.length -1]++; //nadji poslednji element u counters,povecaj za 1
        }
    }
    return counters;
}

module.exports = levelWidth;
