import { Component } from '@angular/core';
import { CardComponent } from '../../componets/card/card.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home-page',
  imports: [CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  products: any;
  constructor(private apiService: ApiService) {
    this.apiService.getProducts().subscribe((data) =>
      {
        this.products = data;
      });
   }

}
