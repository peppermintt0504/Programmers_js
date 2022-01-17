function solution(numbers) {
    var answer = 0;
    for (let a = 0; a < 10; a++) {
        if (numbers.indexOf(a) == -1)
            answer += a

    }

    return answer;
}