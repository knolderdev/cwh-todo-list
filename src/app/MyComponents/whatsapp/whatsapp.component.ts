import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {
  link!: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(number: NgForm){
    this.link = 'https://wa.me/91' + number
    window.location.replace(this.link);
  }

}
