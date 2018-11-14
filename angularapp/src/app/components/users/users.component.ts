import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[]
  showExtended: boolean=true;
  loaded: boolean=false
  enableAdd:boolean=true
  currentClasses={}
  currentStyles={}
  constructor() { }

  ngOnInit() {

    

      this.users=[
        {
        firstName:'John',
        lastName:'Doe',
        age:70,
        address:{
          street:'50 main street',
          city:"Boston",
          state:"Ma"
        },
        image:'http://lorempixel.com/600/600/people/3',
        isActive:true,
        balance:100,
        registered: new Date('01/02/2018 08:30:00')

    
    },{
    firstName:'kevin',
    lastName:'Johnson',
    age:24,
    address:{
      street:'55 mill street',
      city:"Dallas",
      state:"TX"
    },
    image:'http://lorempixel.com/600/600/people/2'
  
  },{
    firstName:'John',
    lastName:'Smith',
    age:23,
    address:{
      street:'20 school st',
      city:"Houston",
      state:"TX"
    },
    image:'http://lorempixel.com/600/600/people/1',
    isActive:true,
    balance:100,
    registered: new Date('01/02/2018 08:30:00')
  
  }
      ]
      this.loaded=true;
      this.setCurrentClasses();
      this.setCurrentStyles();

    


    

    this.showExtended=true;


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
    setCurrentClasses(){
      this.currentClasses={
        'btn-success':this.enableAdd,
        'big-text':this.showExtended
      }
    }
    setCurrentStyles(){
      this.currentStyles={
        'padding-top': this.showExtended? "0" : '40px',
        'font-size': this.showExtended ?"":"40px"
      }
    }
  

}
