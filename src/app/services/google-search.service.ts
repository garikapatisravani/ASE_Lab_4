import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleSearchService {

  public url = 'https://kgsearch.googleapis.com/v1/entities:search?query=' ;
  private apiKey = 'AIzaSyB0LcFlTOFVFLGzZPwVk1zrhXgOQFA0WUE';

  constructor(private http: HttpClient) { }

  getDetails(keyword) {
     return this.http.get(this.url +
        keyword + '&key=' + this.apiKey + '&limit=1&indent=True');
  }
}