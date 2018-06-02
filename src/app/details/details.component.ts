import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private greeting: string;

  constructor(private helloService: HelloService) { 
    this.greeting = 'NULL';
  }

  ngOnInit() {
    this.getHello()
  }

  getHello(): void {
    this.helloService.getHello(`kkkk
    jksdshjdhj
    skjskjk`)
    .subscribe(hello => this.greeting = hello);
  }
}
