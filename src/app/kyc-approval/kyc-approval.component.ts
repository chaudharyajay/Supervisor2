import { Component, OnInit } from '@angular/core';
import { InternalService } from '../services/internal.service';

@Component({
  selector: 'app-kyc-approval',
  templateUrl: './kyc-approval.component.html',
  styleUrls: ['./kyc-approval.component.css']
})
export class KycApprovalComponent implements OnInit {

  constructor(private internalService : InternalService) { }
  kycData:any;
  ngOnInit() {
    this.internalService.KYCapproval().subscribe((data)=>{
      this.kycData = data;
    })
  }

  selectedUserTab = 1;
   tabs = [
     {
       name: 'Anupriya',
       key: 1,
       active: true
     },
      {
      name: 'Ajay',
      key: 2,
      active: false
    },
    {
      name: 'Manisha',
      key: 3,
      active: false
    },
    {
      name: 'Sayooj',
      key: 4,
      active: false
    }
   ];

tabChange(selectedTab) {
    
    this.selectedUserTab = selectedTab.key;
    for (let tab of this.tabs) {
        if (tab.key === selectedTab.key) {
          tab.active = true;
        } else {
          tab.active = false;
        }
    }
  }

}
