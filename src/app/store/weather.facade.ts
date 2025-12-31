import { inject, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectLoading, selectSearchResults, selectSelectedLocation, selectUnits, selectWeather } from "./weather.selectors";
import { weatherActions } from "./weather.actions";
import { LocationSearchResult } from "./weather.models";

@Injectable({
    providedIn: 'root'
})

export class WeatherFacade {
    private readonly store = inject(Store);
    readonly loading = this.store.selectSignal(selectLoading);

    readonly selectedLocation = this.store.selectSignal(selectSelectedLocation);
    readonly weather = this.store.selectSignal(selectWeather);
    readonly searchResults = this.store.selectSignal(selectSearchResults);
    readonly units = this.store.selectSignal(selectUnits);

    constructor(){
        this.store.dispatch(weatherActions.init());
    }

    search(query: string){
        this.store.dispatch(weatherActions.searchLocations({query}));
    }

    selectLocation(location: LocationSearchResult){
        this.store.dispatch(weatherActions.selectLocation({location}));
    }
}