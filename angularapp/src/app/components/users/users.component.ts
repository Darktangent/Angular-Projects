import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]
  constructor() { }

  ngOnInit() {
    this.users=[
      {
      firstName:'John',
      lastName:'Doe',
      age:30,
      address:{
        street:'50 main street',
        city:"Boston",
        state:"Ma"
      }
  
  },{
  firstName:'kevin',
  lastName:'Johnson',
  age:24,
  address:{
    street:'55 mill street',
    city:"Dallas",
    state:"TX"
  }

},{
  firstName:'John',
  lastName:'Smith',
  age:23,
  address:{
    street:'20 school st',
    city:"Houston",
    state:"TX"
  }

}
    ]
    this.addUser({
      firstName:'kevin',
      lastName:'Hurt',
      age:44,
      address:{
        street:'12 wake st',
        city:"Houston",
        state:"TX"
      }
      })
  }
    addUser(user:User){
      this.users.push(user)
    }
  

}
