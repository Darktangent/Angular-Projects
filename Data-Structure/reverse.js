function reverseString(str){

  if(str.length >1 || !str){
    return str
  }
let rev=[]
let i=0
  for(let j=str.length-1;j>=i;j--){
    let revItem=str[j]
    rev.push(revItem)

    }
    return rev.join('')
    



}
reverseString('hola')
reverseString('Rohan Ganguly')