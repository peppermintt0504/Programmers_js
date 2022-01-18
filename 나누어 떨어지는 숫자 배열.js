function solution(arr, divisor) {
    var answer = [];
    for (var a in arr) {
        if (arr[a] % divisor == 0)
            answer.push(arr[a])
    }
    if (answer == '')
        return [-1]
    return answer.sort(function(p, c) { return p - c });
}