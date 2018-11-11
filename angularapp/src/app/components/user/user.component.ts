import {Component} from '@angular/core';

@Component({
  selector:'app-user',
  templateUrl:'./user.component.html',
  styleUrls:['./user.component.css'],
  // styles:[`h2{
  //   color:blue
  // }`]
 // template: '<h2>John Doe</h2>'
})
export class UserComponent{
//properties
firstName:string='John';
lastName:string='Doe';
age:number=30;
foo:any
address={
  street:'50 main st',
  city:'Boston',
  state:'Ma'
}
//methods
constructor(){
  this.sayHello()
  console.log(this.age)
  this.hasBirthday()
  console.log(this.age)
  this.foo=9
}
sayHello(){
  console.log(`Hello ${this.firstName}`)
}
hasBirthday(){
  this.age+=1;
}
}