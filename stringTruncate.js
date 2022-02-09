function truncate(sen, num) {
    return sen.length > num ? sen.slice(0, num) + '...' : sen
}

console.log(truncate('ja sam biktorija', 3))

