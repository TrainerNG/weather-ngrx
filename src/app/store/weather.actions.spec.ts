import { weatherActions } from './weather.actions';
import { LocationSearchResult } from './weather.models';

describe('Weather Actions', () => {
  const mockLocation: LocationSearchResult = {
    id: 1,
    name: 'Test City',
    region: 'Test Region', 
    country: 'Test Country',
    lat: 0,
    lon: 0,
    url: 'test-url'
  };

  it('should create Init action', () => {
    const action = weatherActions.init();
    expect(action).toEqual({ type: '[Weather] Init' });
  });

  it('should create Search Locations action', () => {
    const query = 'test';
    const action = weatherActions.searchLocations({ query });
    expect(action).toEqual({
      type: '[Weather] Search Locations',
      query
    });
  });

  it('should create Search Locations Success action', () => {
    const results = [mockLocation];
    const action = weatherActions.searchLocationsSuccess({ results });
    expect(action).toEqual({
      type: '[Weather] Search Locations Success',
      results
    });
  });

  it('should create Search Locations Failure action', () => {
    const error = 'Error message';
    const action = weatherActions.searchLocationsFailure({ error });
    expect(action).toEqual({
      type: '[Weather] Search Locations Failure',
      error
    });
  });

  it('should create Select Location action', () => {
    const action = weatherActions.selectLocation({ location: mockLocation });
    expect(action).toEqual({
      type: '[Weather] Select Location',
      location: mockLocation
    });
  });

  it('should create Load Weather action', () => {
    const action = weatherActions.loadWeather({ location: mockLocation });
    expect(action).toEqual({
      type: '[Weather] Load Weather',
      location: mockLocation
    });
  });

  it('should create Load Weather Success action', () => {
    const mockWeather = {
      location: {
        name: 'Test City',
        region: 'Test Region',
        country: 'Test Country',
        localtime: '2023-01-01 12:00'
      },
      current: {
        temp_c: 20,
        temp_f: 68,
        feelslike_c: 21,
        feelslike_f: 69.8,
        condition: {
          text: 'Sunny',
          icon: 'test-icon.png'
        },
        is_day: 1
      },
      forecast: {
        forecastday: []
      }
    };
    
    const action = weatherActions.loadWeatherSuccess({ weather: mockWeather });
    expect(action).toEqual({
      type: '[Weather] Load Weather Success',
      weather: mockWeather
    });
  });

  it('should create Load Weather Failure action', () => {
    const error = 'Error loading weather';
    const action = weatherActions.loadWeatherFailure({ error });
    expect(action).toEqual({
      type: '[Weather] Load Weather Failure',
      error
    });
  });
});
