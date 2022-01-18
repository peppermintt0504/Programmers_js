function solution(s) {
    var p = 0;
    var y = 0;

    var word = s.toLowerCase(s)

    for (var i in word) {
        if (word[i] == 'p')
            p += 1

        if (word[i] == 'y')
            y += 1
    }
    if (p == y)
        return true
    else
        return false;
}