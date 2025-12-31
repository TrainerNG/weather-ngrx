import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherApi } from '../core/weather-api';
import { weatherActions } from './weather.actions';
import { catchError, debounceTime, map, of, switchMap } from 'rxjs';

@Injectable()
export class WeatherEffects {
  private readonly actions$ = inject(Actions);
  private readonly api = inject(WeatherApi);

  readonly searchLocations$ = createEffect(()=>
    this.actions$.pipe(
      ofType(weatherActions.searchLocations),
      debounceTime(200),
      switchMap(({query}) => {
        const trimmed = query.trim();
        if(!trimmed){
          return of(weatherActions.searchLocationsSuccess({results:[]}));
        }
        return this.api.searchLocations(trimmed).pipe(
          map((results) => weatherActions.searchLocationsSuccess({results})),
          catchError((error) =>
          of(weatherActions.searchLocationsFailure({error:error})))
        )
      })
    )
  )

  readonly loadWeather$ = createEffect(()=>
  this.actions$.pipe(
    ofType(weatherActions.loadWeather),
    switchMap(({location})=>
    this.api.getWeather(location).pipe(
      map((weather)=> weatherActions.loadWeatherSuccess({weather})),
      catchError((error)=>
      of(weatherActions.loadWeatherFailure({error:error})))
    ))
  ))
}
