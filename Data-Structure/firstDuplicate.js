

function firstDup(arr){


  let tail=arr.length
  let head=0
  console.log(j)
  for (head;head<arr.length-1;head++){

    if(arr[head]!==arr[tail]){
      console.log('inside',arr[tail])
      tail--
    }else if (arr[head]===arr[tail]){
      return (`Found it: ${arr[head]}`)
    }
    
  }
return undefined



}
firstDup([22,34,22,1])