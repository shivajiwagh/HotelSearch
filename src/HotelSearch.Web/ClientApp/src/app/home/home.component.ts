import { Component, Inject } from '@angular/core';
import { faSort, faStar } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../hotel-model'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faSort = faSort;
  faStar = faStar;

  public hotels: Hotel[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.getHotels(http, baseUrl);
  }


  public getHotels(http: HttpClient, baseUrl: string) {
    http.get<Hotel[]>(baseUrl + 'hotelsearch').subscribe(result => {
      this.hotels = result;
    }, error => {
      console.error(error);
    });
  }
}

