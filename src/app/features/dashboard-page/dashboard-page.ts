import { Component, inject } from '@angular/core';
import { SearchPanel } from "../component/search-panel/search-panel";
import { WeatherFacade } from '../../store/weather.facade';
import { HeroBanner } from "../component/hero-banner/hero-banner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-page',
  imports: [SearchPanel, HeroBanner, CommonModule],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.scss',
})
export class DashboardPage {
private readonly facade = inject(WeatherFacade);
readonly weather = this.facade.weather;
readonly units = this.facade.units;
readonly loading = this.facade.loading;
readonly searchResults = this.facade.searchResults;

onSearch(query: string){
  this.facade.search(query);
}

onSelect(location: Parameters<WeatherFacade['selectLocation']>[0]){
  this.facade.selectLocation(location);
}
}
