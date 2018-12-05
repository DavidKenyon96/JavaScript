'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {

    let secondLargest;
   
    nums.sort(function (a, b)
    {
        return a - b;
    });
    //Start `i` at 2 so that were looking at most at the second to last index.
    for (var i = 2; i <= nums.length; i++)
    {
        //Subtract `i` from length here until we find the next largest value and break once it's found.
        if (nums[nums.length - i] < nums[nums.length - 1])
        {
            secondLargest = nums[nums.length - i];
            break;
        }
    }
    return secondLargest;
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}