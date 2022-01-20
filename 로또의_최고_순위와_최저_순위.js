function solution(lottos, win_nums) {
    var answer = [0, 0];
    var curr = 0;
    var unknown = 0;
    for (var i = 0; i < 6; i++) {
        curr += lottos.includes(win_nums[i]);
        if (lottos[i] == 0) unknown += 1;
    }

    answer[0] = 7 - (curr + unknown)
    answer[1] = 7 - (curr)

    if (answer[0] == 7) answer[0] = 6
    if (answer[1] == 7) answer[1] = 6
    return answer;
}