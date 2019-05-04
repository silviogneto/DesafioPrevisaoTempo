import { Component } from "@angular/core";
import { PrevisaoTempoService } from "../../services/previsao.service";
import { IForecast, IForecastItem } from "../../models/IForecast";
import { CidadeService } from "../../services/cidade.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ICidade } from "../../models/ICidade";

@Component({
  selector: 'previsao-tempo-view',
  templateUrl: './previsao-tempo.component.html',
  styleUrls: ['./previsao-tempo.component.css'],
  providers: [PrevisaoTempoService, CidadeService]
})
export class PrevisaoTempoComponent {
  public nomeCidade: string = '';
  public previsaoItens: IForecastItem[] = [];

  constructor(private service: PrevisaoTempoService, private cidadeService: CidadeService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(p => {
      if (p['id']) {
        this.cidadeService.getById(p['id']).subscribe(
          cidade => {
            this.nomeCidade = cidade.nome;

            this.service.getForecastByLocation(cidade).subscribe(
              forecast => {
                // utiliza apenas a primeira hora de cada dia
                for (let item of forecast.list) {
                  let dt = new Date(item.dt_txt);
                  if (dt.getHours() === 0) {
                    item.day = `0${dt.getDate()}`.slice(-2);
                    item.month = `0${dt.getMonth()}`.slice(-2);
                    this.previsaoItens.push(item);
                  }
                }
              },
              error => console.log(error));
          },
          error => console.log(error)
        );
      }
    });
  }
  
}
