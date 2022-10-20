import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  message : any

  constructor(private shared : SharedService) { }

  ngOnInit(): void {
  }

  submitInput(){
    this.shared.sendClick(this.message);
    this.message = '';
  }
}
