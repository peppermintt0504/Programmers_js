function solution(price, money, count) {
    var num = 0
    for (var i = 1; i <= count; i++)
        num += i * price
    if (num > money) return num - money;
    else return 0;
}