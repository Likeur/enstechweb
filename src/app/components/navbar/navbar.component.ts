import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styles: ``
})
export class NavbarComponent {
   
  public navItems = [
    {
      id : 1,
      title : 'Home',
      route: '/landing'
    },
    {
      id : 2,
      title : 'Templates',
      route: '/template'
    },
    {
      id : 3,
      title : 'apropos',
      route: '/aboutus'
    },
  ]
  
}

