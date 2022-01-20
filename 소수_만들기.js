function solution(nums) {
    var answer = 0;
    var result = [];
    var cheak = false;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            for (var r = j + 1; r < nums.length; r++) {
                result.push(nums[i] + nums[j] + nums[r])
            }
        }
    }
    console.log(result)
    for (i = 0; i < result.length; i++) {
        cheak = true;
        for (j = 2; j <= parseInt(Math.sqrt(result[i])); j++) {
            //console.log(result[i], " / ", j)
            if (result[i] % j == 0) {
                cheak = false;
                //console.log('0')
                break;
            }
            //console.log('X')
        }
        if (cheak == true)
            answer += 1
    }
    return answer;
}