function solution(arr) {
    var answer = [];

    for (var i = 0; i < arr.length; i++) {
        if (i == 0) {
            answer.push(arr[i])
            continue
        }
        if (answer[answer.length - 1] == arr[i])
            continue
        answer.push(arr[i])
    }
    return answer;
}