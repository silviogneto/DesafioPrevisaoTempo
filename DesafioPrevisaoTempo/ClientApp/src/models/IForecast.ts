export interface IForecastItemSys {
  pod: string;
}

export interface IForecastItemWind {
  speed: number;
  deg: number;
}

export interface IForecastItemCloud {
  all: number;
}

export interface IForecastItemWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IForecastItemMain {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IForecastItem {
  dt: number;
  main: IForecastItemMain;
  weather: IForecastItemWeather[];
  clouds: IForecastItemCloud;
  wind: IForecastItemWind;
  sys: IForecastItemSys;
  dt_txt: string;
  day: string;
  month: string;
}

export interface IForecastCityCoord {
  lat: number;
  lon: number;
}

export interface IForecastCity {
  id: number;
  name: string;
  coord: IForecastCityCoord;
  country: string;
  population: number;
}

export interface IForecast {
  cod: string;
  message: number;
  cnt: number;
  city: IForecastCity;
  list: IForecastItem[];
}
