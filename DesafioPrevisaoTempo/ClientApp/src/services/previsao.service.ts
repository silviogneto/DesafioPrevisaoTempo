import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ICidade } from "../models/ICidade";

@Injectable()
export class PrevisaoTempoService {
  private apiKey: string = 'eb00b14f76bdf540aafd76dfa2ed26c5';
  private urlApi: string = `https://api.openweathermap.org/data/2.5/forecast?appid=${this.apiKey}`;

  constructor(private httpClient: HttpClient) {
  }

  getForecastById(id) {
    this.httpClient.get(`${this.urlApi}&id=${id}`);
  }

  getForecastByLocation(cidade: ICidade) {
    this.httpClient.get(`${this.urlApi}&q=Recife,BR`).subscribe(x => console.log(x), error => console.log(error));
  }
  // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
}
