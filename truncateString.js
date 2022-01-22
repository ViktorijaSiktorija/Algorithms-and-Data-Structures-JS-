function truncate(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...'
    } else {
        return str
    }
}

truncate('ja sam biktorija', 3)

//typeOf(false)