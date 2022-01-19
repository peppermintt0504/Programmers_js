function solution(n) {
    var answer = 0;
    var temp = [];
    while (n >= 1) {
        temp.push(n % 10);
        n = parseInt(n / 10);
    }
    temp.sort(function(p, c) { return -p + c })
    for (var i = 0; i < temp.length; i++)
        answer = answer * 10 + temp[i]
    return answer;
}