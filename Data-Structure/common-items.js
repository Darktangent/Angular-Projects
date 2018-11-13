

function commonItems(item1,item2){
let obj={}
for(let i=0;i<item1.length;i++){
  if(!obj[item1[i]]){
    const item=item1[i]
    obj[item]=true
  }
}
// console.log(obj)
for (let j=0;j<item2.length;j++){
  if(obj[item2[j]]){
   
    return true
  }

}
return false

}
// commonItems(['a','b','c'],['c','d','f'])

function commonItems2(arr1,arr2){
  return arr1.some(item=>arr2.includes(item))
}
const array1=['a','b','c']
const array2=['c','d','f']
commonItems2(array1,array2)