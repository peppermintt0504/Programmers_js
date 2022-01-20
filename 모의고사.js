function solution(answers) {
    var answer = [];
    var p1 = [1, 2, 3, 4, 5];
    var p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var currect = [0, 0, 0];
    var max_score = 0;


    for (var i = 0; i < answers.length; i++) {
        if (p1[i % p1.length] == answers[i])
            currect[0] += 1
        if (p2[i % p2.length] == answers[i])
            currect[1] += 1
        if (p3[i % p3.length] == answers[i])
            currect[2] += 1
    }
    max_score = currect.reduce((a, b) => {
        if (a >= b) return a
        else return b
    })

    for (i = 0; i < currect.length; i++) {
        if (currect[i] == max_score)
            answer.push(i + 1)
    }

    return answer;
}