function smallestValue(array){
	var array = [3, 55, -10, 19, -27, 6, -2, 0, 11, -4];
    
	var smallest = array[0];
    for(var i = 0; i < array.length;i++)
    {
        for(var j=1; j < array.length;j++)
        {
            if(array[i] < array[j]) 
            {
                i = smallest;
            }
            else if(array[j] < array[i])
            {
                j = smallest;
            } 
        }
    }
    
	//your code here
	return smallest; 
}
smallestValue(array);