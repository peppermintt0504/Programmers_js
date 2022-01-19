function solution(s) {
    var answer = '';
    var word = s.split(" ");

    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < word[i].length; j++) {
            if (j % 2 == 0)
                answer += word[i][j].toUpperCase();
            else
                answer += word[i][j];
        }
        answer += ' '
    }
    return answer.slice(0, -1)
}