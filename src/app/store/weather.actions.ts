import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { LocationSearchResult, WeatherResponse } from "./weather.models";

export const weatherActions = createActionGroup({
    source:'Weather',
    events:{
        Init:emptyProps(),
        'Search Locations': props<{query: string}>(),
        'Search Locations Success': props<{results: LocationSearchResult[]}>(),
        'Search Locations Failure': props<{error: string}>(),
 
        'Select Location': props<{location: LocationSearchResult}>(),


        'Load Weather': props<{location: LocationSearchResult}>(),
        'Load Weather Success': props<{weather: WeatherResponse}>(),
        'Load Weather Failure': props<{error: string}>(),
        
    }
})