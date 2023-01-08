function solution(topping) {

    // 겹치는 숫자의 수기 짝수인지도 알아야함
    let copyNum = 0
    // 겹치는 값이 없는 경우의 숫자도 알아야 함
    let noCopyNum = 0
    
    let dict = {}
    topping.map((t, index)=>{
        if(!dict[t]){
            dict[t]=1
        }
        dict[t] +=1
    })

    let oddNum = 0
    let noCopy = Object.keys(dict)
    Object.keys(dict).find(key => {
        if(dict[key]%2 !== 0){
             oddNum +=1
        }
    });

    if(Object.keys(dict).length%2 ==0 && oddNum%2==0){
        return oddNum
    }else if(oddNum ==0 && Object.keys(dict).length%2 ==0){
        return 
    }
    else{
        return 0
    }
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
console.log(solution([1, 2, 3, 4]));