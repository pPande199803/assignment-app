import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  userMessage:any

  clickEventSubscription !: Subscription

  constructor(private shared : SharedService) { 
    this.clickEventSubscription = this.shared.getTheValue().subscribe(res=>{
      this.userMessage = res;
    })
  }

  ngOnInit(): void {
  }

}
