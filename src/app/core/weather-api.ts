import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { LocationSearchResult, WeatherResponse } from '../store/weather.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.weatherApiBaseUrl;
  private readonly key = environment.weatherApiKey;

  searchLocations(query: string): Observable<LocationSearchResult[]>{
    const params = new HttpParams().set('key', this.key).set('q',query);
    const normalizedQuery = query.trim().toLowerCase();
    return this.http.get<LocationSearchResult[]>(`${this.baseUrl}/search.json`,{params});
  }

  getWeather(location: LocationSearchResult): Observable<WeatherResponse>{
    const params = new HttpParams().set('key', this.key).set('q', `${location.lat},${location.lon}`)
    .set('days','3');
    return this.http.get<WeatherResponse>(`${this.baseUrl}/forecast.json`,{params});
  }
}
