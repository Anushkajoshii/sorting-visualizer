export function getBubbleSortAnimations(Array){
    const animations = [];

    if(Array.length <= 1) return Array;
     //Setting Time complexities
     document.getElementById("Time_Worst").innerText="  O(N^2)";
     document.getElementById("Time_Average").innerText="  Θ(N^2)";
     document.getElementById("Time_Best").innerText="  Ω(N)";
 
     //Setting Space complexity
     document.getElementById("Space_Worst").innerText="  O(1)";
 


    
    for(let i = 0; i < Array.length ; i++){
      for(let j = 0 ; j<Array.length-i-1 ; j++){
        animations.push([j,j+1,'color']);
        animations.push([j,j+1,'revert']);
        
        if(Array[j] > Array[j+1]){
    
          animations.push([j,Array[j+1],'swap']);  
           animations.push([j+1,Array[j],'swap']);  
          var temp = Array[j];
          Array[j] = Array[j+1];
          Array[j+1] = temp;
    
        }
      }
    }
    return animations;
   
  }