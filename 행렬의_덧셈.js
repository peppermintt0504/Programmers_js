function solution(arr1, arr2) {
    var answer = [];
    for (var i in arr1) {
        answer.push([])
        for (var j in arr1[i])
            answer[i].push(arr1[i][j] + arr2[i][j])
    }
    return answer;
}