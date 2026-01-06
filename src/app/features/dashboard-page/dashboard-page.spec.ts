import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPage } from './dashboard-page';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore} from '@ngrx/store/testing';
import { weatherFeature, WeatherState } from '../../store/weather.reducer';

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;
  let store: MockStore<{[weatherFeature.name] : WeatherState}>

  const initialState: WeatherState = {
    query:'',
    searchResults:[],
    selectedLocation: null,
    weather: null,
    units:'c',
    loading: false,
    error: null
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPage,
        StoreModule.forRoot()
      ],

      providers:[
        provideMockStore(
          {
            initialState:{
              [weatherFeature.name]: initialState
            }
          }
        )
      ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
