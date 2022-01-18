function solution(s) {
    var answer = true


    if (isNaN(s) == false && (s.length == 4 || s.length == 6)) {
        if (s == '    ')
            answer = false
        answer = true
    } else {
        answer = false
    }
    return answer;
}