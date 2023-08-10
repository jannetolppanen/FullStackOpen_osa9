export interface Weather {
  id: number;
  date: string;
  weather: 'rainy' | 'sunny' | 'windy';
  visibility: 'good' | 'poor'
}