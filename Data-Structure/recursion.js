// let counter=0
// function inception(){
//   if(counter>3){
//     return 'done'
//   }
//   counter ++
//   return inception()
// }
// inception()

//factorial
function findFactorialRecursive(num){

 if(num<0){
   return -1
 } else if(num===0){
   return 1
 }else {
   return (num* findFactorialRecursive(num-1))
 }

}
findFactorialRecursive(5)



function findFactorialIterative(number){
let result;
 let mul;
  for (i=number-1;i>=1;i--){
  number*=i
 }
  return  number
}

 


findFactorialIterative(3)
function fibIter(num){

let arr=[0,1]
for(let i=2;i<=n;i++){
  arr.push(arr[i-2]+arr[i-1])
}
return arr[num]

}

function fibRecur(num){
  if(n<2){
    return n 
  }
  return fibRecur(n-1)+fibRecur(n-2)
}