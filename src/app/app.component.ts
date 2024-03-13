import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TravelsComponent } from './components/travels/travels.component';
import { ToursComponent } from './components/tours/tours.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { BlogComponent } from './components/blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, TravelsComponent, ToursComponent, HotelsComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'landing-page-angular';
}
