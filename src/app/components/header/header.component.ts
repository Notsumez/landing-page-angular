import { Component } from '@angular/core';
import { StarLogoComponent } from '../star-logo/star-logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [StarLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor (){}
  ngOnInit () {}

  // Function to Show the dropdown Content
  check:boolean=true;

  ShowContent(){
    if(this.check == true){
      this.check=false;
    }else{
      this.check=true;
    }
  }

  navbarVisible: boolean = true;

  toggleNavbar() {
    if(this.navbarVisible == true){
      this.navbarVisible = false;
    }else{
      this.navbarVisible = true;
    }
  }
}
