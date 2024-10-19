/*

Brute
1) sort the array   -> o(nlogn)
     traverse from behind and look for the kth largest element  -> O(n)
                T-> nlogn+n


            var findKthLargest = function(nums, k) {
                nums=nums.sort((a,b)=>a-b)
                let largest=nums[nums.length-1]
                for(let i=nums.length-1 ; i>=0 ; i--)
                {
                    if(largest>=nums[i] && k!=0){
                        k--;
                        largest=nums[i];
                    }
                }
                return largest;
            };

Better
2) Find out the first largest element in the first traversal  -> O(n)
    now second traversal find the second largest ->O(n)

    T-> O(n)

    var findKthLargest = function(nums, k) {
    let largest=nums[0];
    for(let i=0 ; i<nums.length ; i++)
        {
            if(largest<nums[i]){
                largest=nums[i]
            }
        }
    let secondLargest=nums[0];
    for(let i=0 ; i<nums.length ; i++)
        {
            if(nums[i]>secondLargest && nums[i]!=largest)
            {
                secondLargest=nums[i]
            }
        }
    return secondLargest;
    };


*/
