export function getInsertionSortAnimations(arr) {

    /// 'color' means color change in the animation
    /// 'revert' means change the color back to its initial state
    /// 'swap' arr[hole] takes the value of arr[hole - 1]
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="  O(N^2)";
    document.getElementById("Time_Average").innerText="  Θ(N^2)";
    document.getElementById("Time_Best").innerText="  Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="  O(1)";

    const animations = [];
  
    for(let i = 1;i < arr.length;++i) {
  
        const val = arr[i];
        let temp = i;
  
        while(temp > 0 && arr[temp - 1] > val) {
  
            animations.push([temp, temp - 1, 'color']);
            animations.push([temp, temp - 1, 'revert']);
            animations.push([temp, arr[temp - 1], 'swap']);
  
            arr[temp] = arr[temp - 1];
            temp--;
        }
  
        animations.push([temp, i, 'color']);
        animations.push([temp, i, 'revert']);
        animations.push([temp, val, 'swap']);
  
        arr[temp] = val;
    }
    return animations;
  }