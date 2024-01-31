export function getLinearSortAnimations(arr){
    const animations=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            animations.push([i,j,'color']);
            animations.push([i,j,'revert']);

            if(arr[j]<arr[i]){
                animations.push([i,arr[j],'swap']);
                animations.push([j,arr[i],'swap']);
                var temp= arr[i];
                arr[i]= arr[j];
                arr[j]=temp;
            }
        }
    }
    return animations;
}