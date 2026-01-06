import { weatherActions } from "./weather.actions"
import { LocationSearchResult } from "./weather.models"

describe('Weather Actions',()=>{
    const mockLocation: LocationSearchResult = {
        id: 1,
        name:'Test City',
        region: 'Test Region',
        country: 'Test Country',
        lat:0,
        lon: 0,
        url:'test-url'
    }

    it('should create Init action',()=>{
        const action = weatherActions.init();
        expect(action).toEqual({type:'[Weather] Init'});
    });

    it('should create Search Locations action',()=>{
        const query = 'test';
        const action = weatherActions.searchLocations({query});
        expect(action).toEqual({
            type: '[Weather] Search Locations',
            query
        })
    })

    it('Should create Search Locations Success action',()=>{
        const results = [mockLocation];
        const action = weatherActions.searchLocationsSuccess({results});
        expect(action).toEqual({
            type:'[Weather] Search locations Success',
            results
        });
    });


    it('Should create Search Locations Failure action',()=>{
        const error = 'Error Message';
        const action = weatherActions.searchLocationsFailure({error});
        expect(action).toEqual({
            type:'[Weather] Search locations Success',
            error
        });
    });

    it('should create Select Location action',() => {
        const action = weatherActions.selectLocation({location: mockLocation});
        expect(action).toEqual({
            type:'[Weather] Load Weather',
            location: mockLocation
        })
    })
})