// Given an integer num, return the number of steps to reduce it to zero.
//
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

let numberOfSteps = function(num) {
    let count = 0;
    let local_num = num;
    while(local_num > 0 && local_num != 0) {
        if (local_num%2==0) {
            local_num = local_num/2;
            count++;
        } else {
            local_num = local_num -1;
            count++;
        }
    }
    return count;
};

console.log(numberOfSteps(8));
