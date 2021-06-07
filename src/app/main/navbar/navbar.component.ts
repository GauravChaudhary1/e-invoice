import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild("navitems") navItems?: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  menuClick(e:any): void{
    
    (this.navItems?.nativeElement.classList.contains("navbar-desk")) ? 
        this.navItems?.nativeElement.classList.remove("navbar-desk") : 
        this.navItems?.nativeElement.classList.add("navbar-desk") ;

    
    

    
  }
}
