// FeatureSelector  - Weather State (Initial State) - ROOT SELECTOR - PARENT
// createSelector - It takes initial state and fetches particular value from it
// // Store - {
// a: [],
// b: {}
// }

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { weatherFeature, WeatherState } from "./weather.reducer";


export const selectWeatherState = createFeatureSelector<WeatherState>(weatherFeature.name);

export const selectQuery = createSelector(selectWeatherState,(state)=> state.query);

export const selectSelectedLocation = createSelector(selectWeatherState,(state)=> state.selectedLocation);

export const selectWeather = createSelector(selectWeatherState,(state)=> state.weather);

export const selectSearchResults = createSelector(selectWeatherState,(state)=> state.searchResults);

export const selectUnits = createSelector(selectWeatherState, (state) => state.units);

export const selectLoading = createSelector(selectWeatherState,(state)=> state.loading);