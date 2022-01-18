function solution(a, b) {
    var answer = '';
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let sum = 4
    for (let i = 1; i < a; i++) {
        sum += month[i - 1]
    }
    answer = days[((sum + b) % 7)]
    return answer;
}