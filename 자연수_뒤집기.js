function solution(n) {
    var answer = [];
    while (n >= 1) {
        answer.push(n % 10)
        n = parseInt(n / 10)
    }
    return answer;
}