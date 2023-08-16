function sum_Odd(numArr){
    var sum = 0;
    var start = Math.min(numArr[0]+numArr[1]);
    var end = Math.max(numArr[0]+numArr[1]);
    for(var i = start; i <= end ;i++)
    {
        if(numArr[i] % 2 == 1)
        {
            sum += sum;
        }
    }
    return sum;
}
sum_Odd(5,444);