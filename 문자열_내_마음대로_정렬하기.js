function solution(strings, n) {
    var answer = [];
    var len = strings.length;
    var temp = '';

    for (var i = 0; i < len; i++) {

        for (var j = i + 1; j < len; j++) {
            if (strings[i][n] > strings[j][n]) {
                temp = strings[i]
                strings[i] = strings[j]
                strings[j] = temp
            } else if (strings[i][n] == strings[j][n]) {
                var temp_arr = [strings[i], strings[j]].sort()
                strings[i] = temp_arr[0]
                strings[j] = temp_arr[1]
            }
        }
    }
    return strings;
}