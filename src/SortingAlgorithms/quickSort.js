export function getQuickSortAnimations(arr){
     //Setting Time complexities
     document.getElementById("Time_Worst").innerText="  O(N^2)";
     document.getElementById("Time_Average").innerText="  Θ(N log N)";
     document.getElementById("Time_Best").innerText="  Ω(N log N)";
 
     //Setting Space complexity
     document.getElementById("Space_Worst").innerText="  O(log N)";

    const animations= [];
    if(arr.length <=1) return animations;
    quickSort(arr,0, arr.length - 1, animations);
    return animations;
}

function quickSort(arr, left,right, animations){
    if(left<right){
        const index=  partition(arr,left, right,animations);
        //recursion on the left and right of the pivot
        quickSort(arr, left ,index-1, animations);
        quickSort(arr, index+1, right, animations);
    }
}

function partition(arr, left, right, animations){
     /// 'color' means we change the color of the two indexes in the main array
    /// 'revert' means we revert the color change
    /// 'swap' means we swap the two indexes in the main array
    let index= left;
    const pivot= arr[right];
    for(let i=left; i<right; i++){
        animations.push([index,i,'color']);
        animations.push([index,i, 'revert']);
        if(arr[i]<=pivot){
            animations.push([i,arr[index],'swap']);
            animations.push([index,arr[i],'swap']);

            [arr[i],arr[index]] = [arr[index],arr[i]];
            index++;
        }
    }
    animations.push([index,right,'color']);
    animations.push([index,right,'revert']);
    animations.push([index,arr[right],'swap']);
    animations.push([right,arr[index],'swap']);
    
    [arr[index], arr[right]]= [arr[right], arr[index]]
    return index;
}