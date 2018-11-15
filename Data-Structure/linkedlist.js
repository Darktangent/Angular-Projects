//list that is linked

// let myLinkedList={
//   head:{
//     value:10,
//     next:{
//       value:5,
//       next:{
//         value:16,
//         next:null
//       }
//     }
//   }
// }

class LinkedList{

  constuctor(value){
    this.head={
      value:value,
      next:null
    }
    this.tail=this.head
    this.length=1
  }
  append(value){
    //append

    const newNode={
      value:value,
      next:null
    }
    this.tail.next=newNode
    this.tail=newNode
    this.length++
    return this
  }
prepend(value){
  const newNode={
    value:value,
    next:null
  }
  newNode.next=this.head
  this.head=newNode
  this.length++
  return this
}
}

const myLinkedList= new LinkedList(10)
console.log(myLinkedList)
myLinkedList.prepend(1)
