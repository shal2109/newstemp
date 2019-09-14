import { Component, OnInit } from '@angular/core';
import{UserService} from'../user.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public Users=[];

  constructor(private user:UserService) { }

  ngOnInit() {
    this.Users=this.user.getUsers();
  }

}
