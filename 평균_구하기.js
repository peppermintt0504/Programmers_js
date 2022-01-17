function solution(arr) {
    
    var sum = arr.reduce((a,b) => {console.log(a)
                                   console.log(b)
                                   return a+b
                                  })
    
    
    var answer = sum/arr.length;
    return answer;
}