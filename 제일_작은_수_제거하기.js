function solution(arr) {
    var answer = [];
    arr.splice(arr.indexOf(Math.min(arr), 1))

    if (arr.length == '')
        return [-1]
    return arr;
}