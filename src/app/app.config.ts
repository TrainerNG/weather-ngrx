import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import { weatherFeature } from './store/weather.reducer';
import { WeatherEffects } from './store/weather.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideStore(),
    provideHttpClient(withFetch()),
    provideState(weatherFeature),
    provideEffects(WeatherEffects),
    provideRouter(routes)
  ]
};
