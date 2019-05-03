import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICidade } from "../models/ICidade";
import { IForecast } from "../models/IForecast";
import { Observable } from "rxjs/Observable";

@Injectable()
export class PrevisaoTempoService {
  private apiKey: string = 'eb00b14f76bdf540aafd76dfa2ed26c5';
  private urlApi: string = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}&units=metric&lang=pt`;

  constructor(private httpClient: HttpClient) {
  }

  getForecastById(id): Observable<IForecast> {
    return this.httpClient.get<IForecast>(`${this.urlApi}&id=${id}`);
  }

  getForecastByLocation(cidade: ICidade): Observable<IForecast> {
    return this.httpClient.get<IForecast>(`${this.urlApi}&q=${cidade.nome},${cidade.pais}`);
  }
}
