import {createFeature, createReducer, on} from '@ngrx/store';
import { weatherActions } from './weather.actions';
import { LocationSearchResult, TemperatureUnit, WeatherResponse } from './weather.models';

export interface WeatherState {
    query: string;
    searchResults:LocationSearchResult[];
    selectedLocation: LocationSearchResult | null;
    weather: WeatherResponse | null;
    units: TemperatureUnit;
    loading: boolean;
    error: string | null;
}


const initialState:WeatherState={
  query:'',
  searchResults:[],
  selectedLocation: null,
  weather: null,
  units:'c',
  loading: false,
  error: null
}

const reducer = createReducer(
    initialState,
    on(weatherActions.init,()=>initialState),
    
    on(weatherActions.selectLocation ,(state,{location})=>({
        ...state,
        selectedLocation:location
    })),

    on(weatherActions.searchLocations,(state,{query})=>({
        ...state,
        query,
        loading: true,
        error: null
    })),

     on(weatherActions.searchLocationsSuccess,(state,{results})=>(
        {
            ...state,
            loading: false,
            searchResults: results
        }
    )),

 on(weatherActions.searchLocationsFailure,(state,{error})=>(
        {
            ...state,
            loading: false,
            error
        }
    )),

    on(weatherActions.loadWeather,(state)=>(
        {
            ...state,
            loading: true,
            error:null
        }
    )),
    on(weatherActions.loadWeatherSuccess,(state,{weather})=>(
        {
            ...state,
            loading: false,
            weather
        }
    )),
    
     on(weatherActions.loadWeatherFailure,(state,{error})=>(
        {
            ...state,
            loading: false,
            error
        }
    ))
)

export const weatherFeature = createFeature({
    name: 'weather',
    reducer
})