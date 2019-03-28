import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
  

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  onClickMe() {
    let age = document.getElementById("age"); 
    if (age.getAttribute("hidden") == "true") {
    age.removeAttribute ("hidden");
    } else {
    age.setAttribute ("hidden", "true");
    }
    }


  constructor() { }

  ngOnInit() {
  }

}
