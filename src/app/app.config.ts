import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import { weatherFeature } from './store/weather.reducer';
import { WeatherEffects } from './store/weather.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore(),
    provideState(weatherFeature),
    provideEffects(WeatherEffects),
    provideRouter(routes)
  ]
};
