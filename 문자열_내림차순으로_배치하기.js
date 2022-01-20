function solution(s) {
    var answer = '';
    var up = [];
    var low = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] < 'a')
            up.push(s[i])
        else
            low.push(s[i])
    }

    answer = low.sort().reverse().join("") + up.sort().reverse().join("")
    return answer;
}