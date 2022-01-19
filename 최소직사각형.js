function solution(sizes) {
    var answer = [0, 0];
    var temp = [0, 0]


    for (var i = 0; i < sizes.length; i++) {
        if (sizes[i][0] > sizes[i][1]) {
            temp[0] = sizes[i][1]
            temp[1] = sizes[i][0]
        } else {
            temp[0] = sizes[i][0]
            temp[1] = sizes[i][1]
        }
        if (answer[0] < temp[0])
            answer[0] = temp[0]
        if (answer[1] < temp[1])
            answer[1] = temp[1]
    }
    return answer[0] * answer[1];
}