import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
export class HeroBanner {
readonly locationName = input<string>('-');
readonly region = input<string>('');
readonly country = input<string>('');
readonly localTime = input<string>('');
readonly description = input<string>('');
readonly temperature = input<number>(0);
readonly feelsLike = input<number>(0);
readonly units = input<'c' | 'f'>('c');
readonly isDay = input<boolean>(true);

protected readonly unitSymbol = computed(()=> (this.units() === 'c' ? 'Celcius' : 'Fahrenheit'));
protected readonly badgeLabel = computed(()=> (this.isDay() ? 'Daytime' : 'Nighttime'));
}
