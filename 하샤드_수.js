function solution(x) {
    var temp_x = x;
    var num = 0;
    while (temp_x >= 1) {
        num += temp_x % 10
        temp_x = parseInt(temp_x / 10)
    }
    if (x % num == 0)
        return true
    else
        return false;
}