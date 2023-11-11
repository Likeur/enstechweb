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
  menusIsOpen = false
  toggleMenu(){
    this.menusIsOpen = !this.menusIsOpen
    const navLinks = document.querySelector('#navLinks')!
    const barUn = document.querySelector('#bar-un')!
    const barDeux = document.querySelector('#bar-deux')!
    const btnMenu = document.querySelector('#btn-menu')!

    barUn.classList.toggle('rotate-90')
    barDeux.classList.toggle('-translate-y-3')
    btnMenu.classList.toggle('rotate-45')
    navLinks.classList.toggle('-translate-y-[1000rem]')
  }
  
}

