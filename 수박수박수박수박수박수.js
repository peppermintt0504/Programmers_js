function solution(n) {
    var answer = '';
    for (var i = 0; i < parseInt(n / 2); i++)
        answer += '수박'

    if (n % 2 == 1)
        answer += '수'

    return answer;
}