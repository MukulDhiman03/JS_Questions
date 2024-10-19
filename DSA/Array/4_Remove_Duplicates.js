/*
Remove duplicates in place from sorted array

Brute
1) Take set and put elements in set, after 1 iteration set will be containing all the unique elements. -> O(nlogn)
    Now traverse the array and take the eleents from setand put into the array till the set gets empty and return the index . -> O(n)
                    T-> O(nlogn)
                    S-> extra space O(n)



Optimal using 2 pointers
2) Take two pointers 
        var removeDuplicates = function(nums) {
            let i=0;
            for(let j=0 ; j<nums.length ; j++)
            {
                if(nums[i]!=nums[j]){
                    nums[i+1]=nums[j]
                    i++;
                }
            }
            return i+1;
        };


*/
