let arrOfNums = [2,7,11,15];
let targetNum = 9;

let twoSum = function(nums, target) {
    let firstElementIndex;
    let secondElementIndex;
    for (let i = 0; i < nums.length; i++) {
        nums.map(function (value ,index) {
            if (i =! index) {
                let localSum = nums[i] + value;
                if (localSum == target);
                firstElementIndex = i;
                secondElementIndex = index;
            }
        })
    }
    return  firstElementIndex && secondElementIndex ? [firstElementIndex, secondElementIndex] : null;
};

console.log(twoSum(arrOfNums, targetNum));
