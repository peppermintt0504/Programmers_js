function solution(phone_number) {
    var answer = '';
    for (var a = 4; a < phone_number.length; a++)
        answer += '*'

    answer += phone_number.substring(phone_number.length - 4)
    return answer;
}