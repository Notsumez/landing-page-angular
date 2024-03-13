import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.scss'
})
export class ToursComponent {
  cards = [
    { id: 1, image: 'tour-sp.jpg', name: "São Paulo: Guided tour of the city's highlights", time: '5 hours', extra: 'Search service included', local: 'São Paulo - Brazil', type: 'Guided Tour', price: '€63.19 per person' },
    { id: 2, image: 'tour-tokyo.jpg', name: 'From Tokyo: Full-Day Mount Fuji Sightseeing Tour', time: '10 hours', extra: '', local: 'Tokyo - Japan', type: '1 day tour', price: '€75.05 per person' },
    { id: 3, image: 'tour-warner.jpg', name: 'London: Warner Bros. Studios Tour with transfers', time: '7.5 hours', extra: '', local: 'London - England', type: '1 day tour', price: '€122.94 per person' }
  ];

  
}
