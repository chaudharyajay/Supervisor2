import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {
  navbarOpen = false;
  constructor() { }

  ngOnInit() {
  }
  
  toogleNavbar(){
    this.navbarOpen = !this.navbarOpen;
  }
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

}
