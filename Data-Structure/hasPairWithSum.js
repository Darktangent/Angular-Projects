

function pairWithSum(arr,sum){

  let j=1
  for (i=0; i<arr.length; i++){
    if(arr[i]+arr[j]===sum){
      return true
    }else{
      j++
    }
  }
  return false
}
pairWithSum([1,2,3,4,5],6)