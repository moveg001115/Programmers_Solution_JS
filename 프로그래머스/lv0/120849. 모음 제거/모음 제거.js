function solution(my_string) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] === "a" || my_string[i] === "e" || my_string[i] === "i" || my_string[i] === "o" || my_string[i] === "u")
            answer += "";
        else
            answer += my_string[i];
    }
    return answer;
}