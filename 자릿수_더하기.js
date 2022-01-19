function solution(n) {
    var answer = 0;
    var num = parseInt(n)
    while (num >= 1) {
        answer += num % 10;
        num = parseInt(num / 10)
    }

    return answer;
}