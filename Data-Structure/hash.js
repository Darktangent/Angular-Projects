let user ={

  age:54,
  name:'kylie',
  magic:true,
  scream:function(){
    console.log('ahhhhhhh')
  }
}

// user.age
// user.spell='abra kadabra'
// console.log(user)
// console.log(user.spell())
//implementing hansh table
class HashTable{

  constructor(size){
    this.data= new Array(size)
  }
  _hash(key){
    let hash=0
    for (let i=0; i< key.length;i++){
      hash=(hash+key.charCodeAt(i)*i)% this.data.length
     console.log(hash)
    }
    return hash
  }
set(key,value){
  let address= this._hash(key)
  if(!this.data[address]){
    this.data[address]=[]
    // this.data[address].push([key,value])

    // console.log(this.data)
  }
    this.data[address].push([key,value])
    return this.data
  
 
  return this.data

}
get(key){
  let address= this._hash(key)
  const currentBucket=this.data[address]
  if(currentBucket){
    for(let i=0;i<currentBucket.length;i++){
      if(currentBucket[i][0]===key){
        return currentBucket[i][1]
      }


    }
  }
  return undefined



}


}
const myHashTable=new HashTable(50)
myHashTable.set('grapes',10000)
// myHashTable.get('grapes')