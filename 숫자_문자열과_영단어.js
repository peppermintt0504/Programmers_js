function solution(s) {
    var answer = '';
    var alp = '';
    var numToEng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    for (var i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            answer += s[i];
        } else {
            alp += s[i];
            if (numToEng.includes(alp)) {
                answer += numToEng.indexOf(alp)
                alp = '';
            }
        }
    }

    return parseInt(answer);
}