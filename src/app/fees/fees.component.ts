import { Component, OnInit } from '@angular/core';
import { InternalService } from '../services/internal.service'


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  countryFee :any;
  constructor(private internalService : InternalService) { }

  ngOnInit() {
    this.internalService.getUsersDetail().subscribe((data)=>{
      console.log(data);
      this.countryFee = data;
    })
  }
  




}
