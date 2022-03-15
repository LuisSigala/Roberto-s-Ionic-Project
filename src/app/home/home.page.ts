import { Component, OnInit } from '@angular/core';
import { ApiconsumerService } from '../services/apiconsumer.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  response;

  public title = "BIS";
  canUSeeMe = true;
  myCardsArray = [
    {id:15, name:'megaman'}, 
    {id:12, name:'protoman'},
    {id:13, name:'elecman'},
    {id:11, name:'gutsman'},
    {id:15, name:'coldman'}
  ]

  constructor(private apiconsumer: ApiconsumerService) {}

  changetitle(){
    this.title = "Bye";
  }
  sayHello(){
    this.canUSeeMe = !this.canUSeeMe;
  }

  CallAPI(){
    this.apiconsumer.test().subscribe((response) => {
      let localResponse;
      localResponse = response;
    });
  };
}

//FormsModule
//ReactiveFormsModule