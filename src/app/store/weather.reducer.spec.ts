import { weatherActions } from "./weather.actions"
import { LocationSearchResult, TemperatureUnit, WeatherResponse } from "./weather.models"
import { weatherFeature, WeatherState } from "./weather.reducer"

describe('Weather Reducer',()=>{

    const mockLocation: LocationSearchResult = {
        id: 1,
        name:'Test City',
        region: 'Test Region',
        country: 'Test Country',
        lat:0,
        lon:0,
        url:'test-url'
    }

    const mockWeather: WeatherResponse = {
        location:{
            name:'Test City',
            region:'Test Region',
            country: 'Test Country',
            localtime:'2023-01-01 12:00'
        },
        current:{
            temp_c: 20,
            temp_f:60,
            feelslike_c: 21,
            feelslike_f: 69.8,
            condition:{
                text: 'Sunny',
                icon: 'test-icon.png'
        },
        is_day: 1
        },
        forecast:{
            forecastday:[]
        }
    }

    const getInitialState = (): WeatherState => ({
        query:'',
        searchResults:[],
        selectedLocation: null,
        weather: null,
        units:'c' as TemperatureUnit,
        loading: false,
        error: null
    })

    it('should return the initial state',() => {
        const action = {type:'NOOP'} as any;
        const result = weatherFeature.reducer(undefined, action);
        expect(result).toEqual(getInitialState());
    });

    it('should handle selectLocation',() => {
        const state = getInitialState();
        const action = weatherActions.selectLocation({location: mockLocation});
        const result = weatherFeature.reducer(state, action);
        expect(result.selectedLocation).toEqual(mockLocation);
    })

    it('should handle searchLocationsSuccess', ()=>{
        const state = {...getInitialState(),loading: true};
        const results = [mockLocation];
        const action = weatherActions.searchLocationsSuccess({results});
        const result = weatherFeature.reducer(state, action);
        expect(result.loading).toBe(false);
        expect(result.searchResults).toEqual(results);
    })
})